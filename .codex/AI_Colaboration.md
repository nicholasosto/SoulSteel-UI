
### 1. Vision & Scope

1. **North-Star Outcomes:** A system that can interperate human instructions, confirm understanding, and execute complex workflows with minimal human intervention. It should be adaptable to various domains while maintaining a consistent user experience.
2. **Boundaries:** The system should not attempt to handle tasks that require deep domain expertise beyond the provided workflows, nor should it engage in tasks that involve ethical or legal decision-making without human oversight.

### 2. Definitions & Vocabulary

3. **Glossary Check:**
    - **Workflow:** A structured sequence of tasks or steps designed to achieve a specific outcome.
    - **Atomic Task:** The smallest indivisible unit of work within a workflow, which can be executed independently.
    - **Process:** A collection of related workflows that together accomplish a broader goal.
    - **Granularity:** The level of detail or size of the steps within a workflow, which can affect both performance and usability.
    - **Milestone:** A significant point in a workflow that indicates the completion of a major task or phase.
4. **Granularity Sweet Spot:** The ideal granularity for workflows is a balance between too fine (leading to excessive overhead) and too coarse (resulting in inflexibility). A good rule of thumb is to aim for atomic tasks that can be completed in under 5 minutes, allowing for quick iterations and adjustments.

### 3. Deliverables & Format

5. **Artifact Style:** What are some formatting op
6. **Template Needs:** Would a mandatory header block (goal, inputs, outputs, metrics) fit every workflow, or do some need richer structures?

### 4. Quality & Success Metrics

7. **Performance KPIs:** Which numbers should prove a workflow is “better” (e.g., prototype time, # of human–AI handoffs, error rate, satisfaction score)?
8. **Boundary-Pushing Test:** How will we validate that a workflow “pushes the boundaries”—a benchmark, a peer review rubric, or something more qualitative?

### 5. Reuse & Modularity

9. **Reusability Threshold:** What minimum % of a workflow must remain unchanged to reuse it across domains?
10. **Building-Block Library:** Do you envision a shared library of atomic “blocks” (e.g., *Generate Idea Brief*, *Run Fusion Build Script*) that authors can drag-and-drop? If yes, how should those be catalogued?

### 6. Collaboration & Governance

11. **Roles & Permissions:** Who is allowed to create, review, approve, or retire a workflow?
12. **Versioning:** Should updates follow semantic versioning (1.0.1 → 1.1.0) or a simpler date-stamped changelog?

### 7. Practical Example

13. **Canonical Walkthrough:** Which concrete use-case (maybe that alien-abduction TV show) should be documented first as the gold-standard reference?

### 8. Tooling & Automation

14. **Preferred Tools:** Any required software for diagrams (Draw\.io, Miro), docs (Notion, GitHub MD), or task-tracking?
15. **Automation Hooks:** Do we expect CI/CD-style checks (linting the template, verifying metrics fields) before a workflow PR can merge?

### 9. Constraints & Priorities

16. **Time Horizon:** Is there a deadline for v1 of these instructions?
17. **Must-Have vs. Nice-to-Have:** Which elements (definitions, metrics, template) are critical for launch, and which can wait for iterative polish?

---

Answer whichever resonate, and we’ll fold the details back into a crisp, “ready-for-prime-time” instruction set!
