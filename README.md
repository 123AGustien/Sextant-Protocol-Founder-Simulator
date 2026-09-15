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
