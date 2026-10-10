import React, { useState } from 'react'
import { 
  Network, 
  Server, 
  Layers, 
  Cpu, 
  Lock, 
  RefreshCw
} from 'lucide-react'
import './ArchitectureDeepDive.css'

export const ArchitectureDeepDive: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('ecs')

  const stages = [
    {
      id: 'gateway',
      stageNum: '01',
      title: 'FastAPI Ingress Gateway',
      category: 'Ingress & Contract Validation',
      icon: <Server size={18} />,
      summary: 'Asynchronous service gateway accepting 100+ daily runs, validating payloads via Pydantic schemas and enforcing idempotency keys before queue ingestion.',
      rationale: 'Decouples client ingestion from long-running portal automation, preventing connection timeouts and absorbing traffic spikes seamlessly.',
      specs: [
        { label: 'Throughput', value: '100+ daily runs' },
        { label: 'Validation', value: 'Strict Pydantic JSON contracts' },
        { label: 'Auth Flow', value: 'OAuth 2.0 / JWT integration' }
      ],
      codeSnippet: `@router.post("/runs/dispatch", response_model=DispatchResponse)
async def dispatch_portal_run(payload: RunPayload, user: CurrentUser):
    # Enforce idempotency key to prevent duplicate submissions
    await idempotency_guard.validate(payload.idempotency_key)
    queue = resolve_queue_by_workload(payload.workload_tier)
    message_id = await sqs_client.publish(
        queue_url=queue.url,
        body=mask_sensitive_data(payload.model_dump())
    )
    return DispatchResponse(status="DISPATCHED", message_id=message_id)`
    },
    {
      id: 'sqs',
      stageNum: '02',
      title: 'AWS SQS & Celery Queue Tier',
      category: 'Distributed Message Broker',
      icon: <Network size={18} />,
      summary: 'Four priority Celery/SQS queue streams separated by workload class (enrollment, claims, retrieval, payments) with dead-letter queue (DLQ) semantics.',
      rationale: 'Workload-class isolation ensures high-priority claim submissions are never blocked by high-volume read-only retrieval jobs.',
      specs: [
        { label: 'Queues', value: '4 Priority Workload Streams' },
        { label: 'Failure Handling', value: 'Dead-Letter Queues (DLQ)' },
        { label: 'Semantics', value: 'Idempotent, deduplicated delivery' }
      ],
      codeSnippet: `CELERY_TASK_ROUTES = {
    'tasks.enrollment.*': {'queue': 'sqs-high-priority-enrollment'},
    'tasks.claims.*':     {'queue': 'sqs-critical-claims-submission'},
    'tasks.retrieval.*':  {'queue': 'sqs-bulk-retrieval'},
    'tasks.payments.*':   {'queue': 'sqs-payment-sync'},
}
# Dead-letter configuration routes 3x failed messages to forensic triage`
    },
    {
      id: 'ecs',
      stageNum: '03',
      title: 'AWS ECS Worker Fleet',
      category: 'Containerized Compute',
      icon: <Cpu size={18} />,
      summary: 'Docker containers deployed on AWS ECS worker pools, sized by workload class with horizontal autoscaling to sustain 500+ weekly claims.',
      rationale: 'Containerization provides clean process isolation between browser automation sessions and prevents memory leaks across long runs.',
      specs: [
        { label: 'Capacity', value: '500+ weekly claims sustained' },
        { label: 'Autoscaling', value: 'Queue backlog depth triggers' },
        { label: 'Isolation', value: 'Per-task container execution' }
      ],
      codeSnippet: `class ECSWorkerPoolManager:
    """Sizes and autoscale ECS Fargate task definitions by workload tier."""
    WORKLOAD_ALLOCATIONS = {
        WorkloadClass.CRITICAL_CLAIM: {"cpu": "2048", "memory": "4096"},
        WorkloadClass.BULK_RETRIEVAL: {"cpu": "1024", "memory": "2048"},
    }
    # Scales horizontally as SQS ApproximateNumberOfMessagesVisible scales`
    },
    {
      id: 'framework',
      stageNum: '04',
      title: 'Shared OOP Framework',
      category: 'Extensible Core Abstraction',
      icon: <Layers size={18} />,
      summary: 'Object-oriented framework powering 233 automation modules, modeling 8 distinct workflow types into first-class extensible base classes.',
      rationale: 'Replaces per-script duplication with a single shared core, cutting new portal development from days to hours.',
      specs: [
        { label: 'Scale', value: '233 Production Modules' },
        { label: 'Coverage', value: '40+ Insurance Payer Portals' },
        { label: 'Base Workflows', value: '8 Extensible Base Classes' }
      ],
      codeSnippet: `class BaseClaimWorkflow(BasePortalAutomation, ABC):
    """Shared base class for all claim submissions across 40+ portals."""
    @abstractmethod
    async def extract_patient_details(self) -> PatientClaimModel: ...
    
    @abstractmethod
    async def submit_copay_card(self, card: CopayCard) -> ClaimReceipt: ...
    
    async def execute_lifecycle(self) -> RunResult:
        await self.login_with_mfa_guard()
        await self.verify_payer_eligibility()
        return await self.process_submission()`
    },
    {
      id: 'security',
      stageNum: '05',
      title: 'PHI Masking & HIPAA Boundary',
      category: 'Compliance & Audit Filter',
      icon: <Lock size={18} />,
      summary: 'Strict logging filter interceptors and typed maskers sanitize patient identifiers before CloudWatch ingestion to guarantee zero PHI leaks.',
      rationale: 'Guarantees HIPAA compliance at the architectural boundary, eliminating accidental patient data leakage regardless of developer call site.',
      specs: [
        { label: 'Leakage Rate', value: '0% Patient PHI in Logs' },
        { label: 'Mechanism', value: 'Boundary-level typed maskers' },
        { label: 'Audit Trail', value: 'HIPAA-compliant CloudWatch sinks' }
      ],
      codeSnippet: `class PHIScrubbingFilter(logging.Filter):
    """Enforces zero patient data or credentials reach external logging."""
    PATTERNS = [
        (re.compile(r'\\b\\d{3}-\\d{2}-\\d{4}\\b'), '[REDACTED_SSN]'),
        (re.compile(r'\\b\\d{9,11}\\b'), '[REDACTED_MEMBER_ID]'),
    ]
    def filter(self, record: logging.LogRecord) -> bool:
        record.msg = self.scrub_phi(str(record.msg))
        return True`
    },
    {
      id: 'resilience',
      stageNum: '06',
      title: 'Typed Resilience Registry',
      category: 'Fault Tolerance & 2FA Recovery',
      icon: <RefreshCw size={18} />,
      summary: 'Centralized exception registry classifying severity, retryability, and automated remediation like watermark-based Okta 2FA email-OTP retrieval.',
      rationale: 'Cuts engineering maintenance overhead by 30% by turning failure classification into an observable, triageable platform property.',
      specs: [
        { label: 'Maintenance Drop', value: '-30% Maintenance Overhead' },
        { label: '2FA Recovery', value: 'Watermarked consume-once OTP' },
        { label: 'Retry Strategy', value: 'Exponential backoff with jitter' }
      ],
      codeSnippet: `class TypedErrorRegistry:
    """Classifies errors for automatic remediation and retryability."""
    REGISTRY = {
        PortalUIChangedError:  ErrorSpec(severity=HIGH, retryable=False, alert=True),
        Okta2FAChallengeError: ErrorSpec(severity=MEDIUM, retryable=True, handler="resolve_otp"),
        NetworkFlapError:      ErrorSpec(severity=LOW, retryable=True, backoff="exponential_jitter"),
    }`
    }
  ]

  const activeStage = stages.find(s => s.id === selectedNode) || stages[0]

  return (
    <section id="architecture" className="section-wrapper architecture-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Network size={14} />
            <span>Architecture Blueprint</span>
          </div>
          <h2 className="section-title">
            The Healthcare Distributed Workload Pipeline.
          </h2>
          <p className="section-description">
            Interactive breakdown of the event-driven AWS platform orchestrating 233 automation modules across 40+ payer portals under HIPAA controls. Click any architectural stage to inspect implementation specs.
          </p>
        </div>

        {/* Blueprint Layout Container */}
        <div className="architecture-blueprint-container glass-tinted specular-top-edge">
          
          {/* Top Horizontal Stage Flow */}
          <div className="blueprint-stages-nav" role="tablist">
            {stages.map((stage) => {
              const isSelected = selectedNode === stage.id
              return (
                <button
                  key={stage.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`stage-nav-pill ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedNode(stage.id)}
                >
                  <span className="stage-nav-num">{stage.stageNum}</span>
                  <span className="stage-nav-name">{stage.title.split(' ')[0]} {stage.title.split(' ')[1]}</span>
                  {isSelected && <span className="stage-active-dot" />}
                </button>
              )
            })}
          </div>

          {/* Active Blueprint Specification Viewer */}
          <div className="blueprint-stage-viewer">
            
            {/* Left: Stage Overview & Rationale */}
            <div className="viewer-left-col">
              <div className="stage-meta-header">
                <div className="stage-icon-badge">
                  {activeStage.icon}
                </div>
                <div>
                  <span className="stage-category-label">Stage {activeStage.stageNum} • {activeStage.category}</span>
                  <h3 className="stage-title">{activeStage.title}</h3>
                </div>
              </div>

              <p className="stage-full-desc">{activeStage.summary}</p>

              <div className="rationale-box glass-surface-subtle">
                <span className="rationale-label">Architectural Rationale</span>
                <p className="rationale-text">{activeStage.rationale}</p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="stage-specs-strip">
                {activeStage.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="spec-cell">
                    <span className="spec-cell-label">{spec.label}</span>
                    <span className="spec-cell-val">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Code Blueprint Snippet */}
            <div className="viewer-right-col">
              <div className="arch-code-window glass-surface-subtle">
                <div className="window-header-bar">
                  <div className="window-dots">
                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-dot" />
                  </div>
                  <span className="window-filename">{activeStage.id}_architecture.py</span>
                  <span className="window-lang">Python 3.12</span>
                </div>
                <pre className="code-pre-block">
                  <code>{activeStage.codeSnippet}</code>
                </pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
