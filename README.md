code.
Open the SRPC Research Test⁠�

https://123AGustien.github.io/Sextant-SRPC-Technology-Domain-Simulator-Factory/research/srpc/srpcTest.html

research/
└── srpc/
    ├── srpcKernel.js       ← protected SRPC
    ├── srpcRules.js        ← protected SRPC
    ├── srpcCompute.js      ← protected SRPC
    ├── srpcTest.html       ← protected SRPC
    │
    └── domain/
        ├── ScenarioData.js
        ├── Rules.js
        ├── ScenarioCompute.js
        └── ScenarioTest.html

# Sextant-SRPC-Technology-Domain-Simulator-Factory
Sextant-SRPC-Technology-Domain-Simulator-Factory

Sextant-SRPC-Technology-Domain-Simulator-Factory

Reusable Technology-Domain Simulator Factory

The Sextant SRPC Technology-Domain Simulator Factory is a reusable framework for creating deterministic technology and industry-domain simulators using a common Sextant Resilience and Protocol Core (SRPC) foundation.

The purpose is to automate the procedure of creating a new domain simulator while preserving a stable architecture and preventing domain-specific development from altering the protected SRPC foundation.

---

Core Architecture

TECHNOLOGY / COMPANY
        ↓
DOMAIN DATA
        ↓
ALGORITHMS / RULES
        ↓
COMPUTE / ENGINE
        ↓
SRPC FOUNDATION
        ↓
DOMAIN SIMULATOR
        ↓
TEST / VERIFY
        ↓
AUDITABLE RESULT

Architecture Principle

DATA → ALGORITHMS → COMPUTE

- Data defines the domain, inputs, conditions, states, constraints and available actions.
- Algorithms / Rules define the decision logic applied to that data.
- Compute / Engine executes the defined logic and produces the simulator result.
- SRPC provides the protected resilience and protocol foundation.
- Simulator presents the domain-specific result for research, demonstration and V&V purposes.

---

Protected SRPC Foundation

The SRPC foundation is treated as protected infrastructure.

Domain development must not rewrite, rename, bypass or modify the protected SRPC foundation.

The domain layer is built around and through the defined SRPC interface.

This provides a controlled separation between:

SRPC FOUNDATION
        +
DOMAIN-SPECIFIC DATA
        +
DOMAIN-SPECIFIC RULES
        +
DOMAIN-SPECIFIC COMPUTE

---

Standard Domain File Set

Every new technology domain follows the same controlled file structure:

research/
└── srpc/
    ├── srpcKernel.js
    ├── srpcRules.js
    ├── srpcCompute.js
    ├── srpcTest.html
    │
    └── domain/
        ├── ScenarioData.js
        ├── Rules.js
        ├── ScenarioCompute.js
        └── ScenarioTest.html

The protected SRPC foundation remains stable.

The domain-specific files contain the technology or company implementation.

---

Automated Domain Creation

The Factory is intended to standardize and automate the creation procedure:

1. Define technology / company domain
2. Define domain data
3. Define domain rules and algorithms
4. Define compute requirements
5. Connect domain to SRPC
6. Generate simulator
7. Run deterministic tests
8. Verify results
9. Publish through GitHub Pages

The objective is to make the creation of a new simulator repeatable rather than rebuilding each simulator independently.

---

No-Drift Principle

The Factory follows a strict no-drift development principle.

Do not:

- rewrite the protected SRPC foundation
- rename protected files
- silently change established interfaces
- mix unrelated domains
- bypass the SRPC layer
- invent unsupported inputs or results
- patch unrelated files to solve a domain problem

Do:

- preserve the existing architecture
- add domain modules
- keep data, algorithms and compute separated
- test each domain independently
- verify the SRPC integration
- maintain deterministic and auditable results

---

Intended Applications

The Factory can be used to create technology-domain simulators for areas such as:

- Aerospace
- Semiconductor and AI infrastructure
- Robotics
- Energy
- Maritime autonomy
- Infrastructure
- Financial resilience
- Advanced manufacturing
- Edge AI
- Other technology and industrial domains

Each domain remains independently testable while using the same underlying SRPC architecture.

---

Human Decision Authority

Where a domain involves consequential decisions, the simulator is intended as a decision-support and research environment.

The simulator does not independently authorize real-world physical execution.

Human authority remains explicit where required by the domain.

---

Repository Status

Project: Sextant SRPC Technology-Domain Simulator Factory
Purpose: Reusable domain-simulator generation framework
Architecture: DATA → ALGORITHMS → COMPUTE
Foundation: Protected SRPC
Execution: Deterministic simulation
Deployment: GitHub / GitHub Pages
Primary objective: Repeatable technology-domain simulator creation

---

Sextant Protocol

The Factory is part of the broader Sextant Protocol resilience and decision-support architecture.

It is designed to demonstrate how a common resilience foundation can be applied across different technology and industry domains without creating unrelated one-off simulator architectures.

# Sextant Protocol™

## SRPC Technology Domain Simulator Factory

### Complete Protected Architecture and New Domain Scenario File Specification

---

# 1. Protected SRPC Foundation

These files already exist and remain **PROTECTED**.

    research/srpc/srpcKernel.js
    research/srpc/srpcRules.js
    research/srpc/srpcCompute.js
    research/srpc/srpcTest.html

## Protection Rule

The SRPC foundation must not be rewritten, replaced, or patched during domain development.

The protected SRPC foundation provides the deterministic resilience-processing layer for the Sextant Protocol™ architecture.

The existing validated interfaces, safety boundaries, deterministic behaviour, and human-authority requirements remain protected.

---

# 2. New Domain — Complete Required File Set

For every new technology domain, create the following complete file set.

    research/srpc/<domain>ScenarioData.js
    research/srpc/<domain>Rules.js
    research/srpc/<domain>ScenarioRules.js
    research/srpc/<domain>RuleEngine.js
    research/srpc/<domain>Scenario.js
    research/srpc/<domain>ScenarioRuleEngine.js
    research/srpc/<domain>ScenarioEngine.js
    research/srpc/<domain>DomainIntegration.js
    research/srpc/<domain>Module.js
    research/srpc/<domain>Test.html

Each domain is developed independently while using the protected Sextant Protocol™ SRPC foundation.

Domain-specific files must not alter the protected SRPC foundation.

---

# 3. Main Cockpit Integration

The technology domain is connected to the main Sextant Protocol™ cockpit additively through:

    index.html

The cockpit provides integration, presentation, scenario selection, status display, decision presentation, and validation visibility.

The UI does not become the source of decision logic.

Decision logic remains governed by the appropriate data, rules, scenario, engine, and protected Sextant Protocol™ architecture layers.

---

# 4. Technology Domain — Complete File Set

Every technology domain implemented through the Sextant Protocol™ SRPC Technology Domain Simulator Factory uses the following complete implementation.

    research/srpc/<domain>ScenarioData.js
    research/srpc/<domain>Rules.js
    research/srpc/<domain>ScenarioRules.js
    research/srpc/<domain>RuleEngine.js
    research/srpc/<domain>Scenario.js
    research/srpc/<domain>ScenarioRuleEngine.js
    research/srpc/<domain>ScenarioEngine.js
    research/srpc/<domain>DomainIntegration.js
    research/srpc/<domain>Module.js
    research/srpc/<domain>Test.html

The <domain> prefix identifies the independent technology-domain implementation.

Each domain retains its own:

    DATA
    RULES
    SCENARIOS
    RULE ENGINES
    SCENARIO ENGINES
    INTEGRATION
    MODULE
    VALIDATION

Domain development remains independent from the Factory main branch.

---

# 5. Sextant Protocol™ Rule Library and Governance Layer

The existing Sextant Protocol™ Rule Library forms part of the protected value and governance architecture of Sextant Protocol™.

The Rule Library provides structured, version-controlled, governed rules for deterministic simulation and decision-support processing.

The protected Sextant Protocol™ architecture includes the capabilities represented by the existing Rule Library, including:

    AUDIT
    GOLDEN RULE
    CROSS-DOMAIN ENGINE
    AUTO REGISTRY
    AUTO SUGGESTION
    CASCADE GRAPH
    DEPENDENCY LOCK
    DIAGNOSTICS
    ENGINE UI
    ENGINE
    REPORT GENERATOR
    RUNTIME GUARD
    SOLUTION ENGINE
    UI
    STYLES
    RULE DATA
    ENGINE DEFINITIONS
    CASCADE MODEL
    SIMULATION ENGINE
    SIMULATOR UI
    RULE INDEX
    SCENARIO MAP
    MODULE DOCUMENTATION
    EVOLUTION LOG
    RUNTIME LAYER
    ENGINE LAYER
    MODULE LAYER
    RULES LAYER

These capabilities must be preserved as part of the broader Sextant Protocol™ governance and protection architecture.

They must not be discarded, unintentionally duplicated, or replaced merely because a new technology domain uses the SRPC 10-file domain structure.

The Factory therefore preserves:

    PROTECTED SEXTANT PROTOCOL™ GOVERNANCE
              +
    PROTECTED SRPC FOUNDATION
              +
    INDEPENDENT DOMAIN IMPLEMENTATION

---

# 6. Complete Sextant Protocol™ Architecture File Set

## Protected SRPC Foundation

    research/srpc/srpcKernel.js
    research/srpc/srpcRules.js
    research/srpc/srpcCompute.js
    research/srpc/srpcTest.html

## Domain Data

    research/srpc/<domain>ScenarioData.js

## Domain Rules

    research/srpc/<domain>Rules.js

## Scenario Rule Data

    research/srpc/<domain>ScenarioRules.js

## Domain Rule Engine

    research/srpc/<domain>RuleEngine.js

## Domain Scenario

    research/srpc/<domain>Scenario.js

## Scenario Rule Engine

    research/srpc/<domain>ScenarioRuleEngine.js

## Scenario Engine

    research/srpc/<domain>ScenarioEngine.js

## Domain Integration

    research/srpc/<domain>DomainIntegration.js

## Domain Module

    research/srpc/<domain>Module.js

## Standalone Validation

    research/srpc/<domain>Test.html

## Main Cockpit

    index.html

## Protected Sextant Protocol™ Governance and Support Architecture

    AUDIT.JS
    GOLDEN_RULE.js
    CROSS_DOMAIN_ENGINE.js
    auto-registry.js
    autoSuggest.js
    cascade-graph.js
    dependency-lock.js
    diagnostics.js
    engine-ui.js
    engine.js
    report-generator.js
    runtime-guard.js
    solutionEngine.js
    UI.JS
    STYLES.CSS
    rules.json
    ENG-001.json
    ENG-002.json
    CASCADE_MODEL.md
    SIMULATION_ENGINE.md
    SIMULATOR_UI.md
    RULE_INDEX.md
    SCENARIO_MAP.md
    ENG-MODULE-README.md
    evolution_log.json
    evolution_log.txt

## Protected Architecture Directories

    runtime/
    engine/
    modules/
    rules/

The exact physical location of these protected governance components remains subject to the established Sextant Protocol™ repository architecture.

They are identified here as protected architectural capabilities and must not be unintentionally duplicated, removed, or replaced during SRPC Factory development.

---

# 7. Development Sequence

Each new technology domain follows this sequence.

    1. ScenarioData.js
    2. Rules.js
    3. ScenarioRules.js
    4. RuleEngine.js
    5. Scenario.js
    6. ScenarioRuleEngine.js
    7. ScenarioEngine.js
    8. DomainIntegration.js
    9. Module.js
    10. Test.html
    11. Standalone validation
    12. index.html integration
    13. Domain integration validation
    14. Determinism validation
    15. Safety-boundary validation
    16. Governance and protection validation
    17. Primary / Secondary / Stabilizer / Captain AI Lena validation
    18. Human Decision Authority validation
    19. Research milestone tag

No step authorizes modification of protected architecture.

---

# 8. Sextant Protocol™ Primary / Secondary / Stabilizer / Captain AI Lena Architecture

The Sextant Protocol™ decision-support architecture is:

    ENVIRONMENT / AVAILABLE INPUTS
                ↓
              DATA
                ↓
           PRIMARY AI
                ↓
         SECONDARY AI
                ↓
           STABILIZER
                ↓
        CAPTAIN AI LENA
                ↓
    HUMAN DECISION AUTHORITY
                ↓
        SIMULATED ACTION
                ↓
             AUDIT
                ↓
             UPDATE

## Primary AI

The Primary AI performs the primary analytical processing of the available scenario information.

It operates within the governed Sextant Protocol™ architecture.

## Secondary AI

The Secondary AI provides an independent secondary analytical layer for verification, comparison, consistency checking, or additional assessment.

It does not replace Human Decision Authority.

## Stabilizer

The Stabilizer provides an additional resilience and consistency layer between analytical processing and decision-support processing.

The Stabilizer helps prevent uncontrolled propagation of inconsistent or unstable scenario results.

## Captain AI Lena

Captain AI Lena is the governed decision-support layer.

Captain AI Lena receives the preceding analytical and stabilization results and produces a governed decision-support assessment, decision, or recommended response.

Captain AI Lena does not possess final physical authority.

## Human Decision Authority

Human Decision Authority remains final.

The human decision-maker may:

    AUTHORIZE
    MAINTAIN SAFE STATE
    REQUEST DIAGNOSTICS
    ABORT
    ESCALATE

The precise available options remain scenario-dependent.

## Simulated Action

Any resulting ACT is simulated only.

Physical execution remains disabled.

Autonomous actuation remains disabled.

---

# 9. Sextant Protocol™ Golden Rule

The complete decision lifecycle is:

    OBSERVE
      ↓
    VERIFY
      ↓
    ASSESS
      ↓
    DECIDE
      ↓
    ACT
      ↓
    UPDATE

## OBSERVE

Collect and identify available scenario information.

## VERIFY

Check validity, consistency, dependencies, and available evidence.

## ASSESS

Evaluate the scenario using governed rules and deterministic processing.

## DECIDE

Produce the resulting decision or recommended response through the governed decision-support architecture.

## ACT

Represent the selected response as a simulated action.

## UPDATE

Record the resulting state, audit information, and scenario outcome.

ACT represents simulated action only.

---

# 10. Governance

## Additive Development

New domain development is **ADDITIVE ONLY**.

Existing validated architecture must be preserved.

## Protected Foundation

Protected SRPC files are not rewritten.

## Protected Sextant Architecture

Existing validated Sextant Protocol™ governance and support capabilities are not discarded or replaced without explicit architectural authorization.

## Validated Domain Files

Validated domain files are not patched.

## Rule Authority

Domain rules remain within the appropriate data and rule layer.

## Algorithm Separation

Algorithms perform matching, correlation, and application of decision logic.

## Compute Separation

Compute executes the defined logic.

## AI Layer Separation

Primary AI, Secondary AI, Stabilizer, and Captain AI Lena remain distinct architectural roles.

No layer may silently assume the authority of another layer.

## UI Separation

The UI does not become the source of decision logic.

## Audit

Decision processing must remain auditable.

## Dependency Protection

Required dependencies and architecture relationships must remain controlled.

## Cascade Protection

Scenario cascade processing must remain governed.

## Runtime Protection

Runtime safety boundaries must remain enforced.

## Simulated Action

ACT represents simulated action only.

## Physical Safety Boundary

Physical execution remains disabled.

## Autonomous Safety Boundary

Autonomous actuation remains disabled.

## Human Decision Authority

Human Decision Authority remains final.

## Research Integrity

Research claims must not exceed validated evidence.

## Domain Independence

Each technology-domain scenario remains its own independent domain implementation.

## SRPC Role

SRPC remains the reusable resilience-processing research layer.

## Sextant Protocol™ Role

Sextant Protocol™ remains the governing resilience, decision-support, simulation, audit, safety, and research architecture.

---

# 11. Factory Development Principle

The **Sextant Protocol™ SRPC Technology Domain Simulator Factory** provides a reusable architecture for developing independent technology-domain simulators while preserving the established Sextant Protocol™ governance and protection architecture.

    SEXTANT PROTOCOL™
            │
            ▼
    GOVERNANCE / PROTECTION
            │
            ▼
    PROTECTED SRPC FOUNDATION
            │
            ▼
    DATA
            │
            ▼
    PRIMARY AI
            │
            ▼
    SECONDARY AI
            │
            ▼
    STABILIZER
            │
            ▼
    CAPTAIN AI LENA
            │
            ▼
    HUMAN DECISION AUTHORITY
            │
            ▼
    SIMULATED ACTION
            │
            ▼
    AUDIT
            │
            ▼
    UPDATE

The Factory provides architectural consistency without making any individual technology domain the definition of Sextant Protocol™.

---

# 12. Factory Branch Principle

The Factory main branch represents the:

    MASTER
    TEMPLATE
    CATALOGUE
    ARCHITECTURAL BASELINE

Individual technology domains are developed independently on their own branches.

    main
     │
     ├── factory/<domain>
     │
     ├── factory/<domain>
     │
     ├── factory/<domain>
     │
     └── factory/<future-domain>

Domain branches are independent development environments.

Domain branches are **NOT normally merged back into Factory main**.

Factory main remains the stable architecture and domain catalogue.

The Factory does not require every completed domain implementation to become part of the Factory main branch.

---

# 13. Domain Development Boundary

Each technology domain must preserve the following separation:

    DOMAIN DATA
         ↓
    DOMAIN RULES
         ↓
    RULE ENGINE
         ↓
    SCENARIO
         ↓
    SCENARIO RULE ENGINE
         ↓
    SCENARIO ENGINE
         ↓
    DOMAIN INTEGRATION
         ↓
    MODULE
         ↓
    VALIDATION
         ↓
    SEXTANT PROTOCOL™ PROCESSING
         ↓
    PRIMARY AI
         ↓
    SECONDARY AI
         ↓
    STABILIZER
         ↓
    CAPTAIN AI LENA
         ↓
    HUMAN DECISION AUTHORITY
         ↓
    SIMULATED ACTION
         ↓
    AUDIT / UPDATE

The protected SRPC foundation remains underneath the domain implementation.

The protected Sextant Protocol™ governance architecture remains above and around the domain implementation where applicable.

The domain must not bypass:

    GOVERNANCE
    SAFETY
    DETERMINISM
    AUDIT
    DEPENDENCY CONTROL
    HUMAN AUTHORITY

Domain-specific decision logic must remain within the appropriate domain data, rule, scenario, and engine layers.

The domain must not redefine the Sextant Protocol™ Golden Rule.

The domain must not redefine the authority of Primary AI, Secondary AI, Stabilizer, Captain AI Lena, or Human Decision Authority.

---

# 14. Safety and Research Boundary

All Sextant Protocol™ SRPC technology-domain simulators remain:

    LOCAL
    DETERMINISTIC
    SIMULATED
    RESEARCH-ORIENTED
    HUMAN-AUTHORIZED
    AUDITABLE
    GOVERNED

The architecture does not provide:

    PHYSICAL EXECUTION
    AUTONOMOUS ACTUATION
    UNCONTROLLED EXTERNAL EXECUTION

## Human Authority

Human Decision Authority remains final.

AI-generated assessments and recommendations do not constitute physical authorization.

## Determinism

Deterministic behaviour must be validated.

## Safety

Safety boundaries must be validated.

## Dependencies

Dependencies must be validated.

## Audit

Audit behaviour must be validated.

## Research

Research claims must remain evidence-based.

No simulator result may be represented as operational proof beyond the evidence actually validated by the system.

The existence of:

    PRIMARY AI
    SECONDARY AI
    STABILIZER
    CAPTAIN AI LENA
    RULE ENGINE
    DECISION ENGINE
    SOLUTION ENGINE
    SIMULATION ENGINE

does not constitute authorization for physical execution.

---

# 15. Final Factory Definition

The **Sextant Protocol™ SRPC Technology Domain Simulator Factory** is a reusable, additive research architecture for creating independent technology-domain simulators while preserving the complete protected value of the Sextant Protocol™ architecture.

The Factory preserves:

    PROTECTED SEXTANT PROTOCOL™ GOVERNANCE
    PROTECTED SRPC FOUNDATION
    STRUCTURED DATA
    GOVERNED RULES
    ALGORITHMIC DECISION LOGIC
    DETERMINISTIC COMPUTE
    SCENARIO PROCESSING
    PRIMARY AI
    SECONDARY AI
    STABILIZER
    CAPTAIN AI LENA
    HUMAN DECISION AUTHORITY
    CASCADE ANALYSIS
    DEPENDENCY CONTROL
    DIAGNOSTICS
    RUNTIME PROTECTION
    AUDIT
    REPORTING
    SOLUTION PROCESSING
    GOLDEN RULE
    SIMULATION-ONLY ACTION
    DOMAIN INDEPENDENCE
    ARCHITECTURAL CONSISTENCY
    CONTROLLED RESEARCH VALIDATION

The Factory does not replace the Sextant Protocol™ architecture.

The Factory extends it additively.

The Factory does not make any individual technology domain the definition of Sextant Protocol™.

Each technology domain remains an independent implementation operating within the protected Sextant Protocol™ architecture.

The Sextant Protocol™ name represents the complete governed architecture, including:

    RESILIENCE PROCESSING
    DATA GOVERNANCE
    RULE GOVERNANCE
    ALGORITHMIC PROCESSING
    COMPUTE
    PRIMARY AI
    SECONDARY AI
    STABILIZER
    CAPTAIN AI LENA
    HUMAN DECISION AUTHORITY
    SIMULATION
    AUDIT
    SAFETY
    DETERMINISM
    RESEARCH DISCIPLINE

The Factory therefore protects the architecture while allowing Sextant Protocol™ to expand into new technology domains without rewriting the foundation.

---

# Sextant Protocol™

## DATA → ALGORITHMS → COMPUTE

## OBSERVE → VERIFY → ASSESS → DECIDE → ACT → UPDATE

## PRIMARY AI → SECONDARY AI → STABILIZER → CAPTAIN AI LENA → HUMAN DECISION AUTHORITY

## ADDITIVE
## DETERMINISTIC
## HUMAN-AUTHORIZED
## AUDITABLE
## SIMULATION-ONLY
## RESEARCH-CONTROLLED
## PROTECTED
