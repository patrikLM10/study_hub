# GATE-Level HOTS: 30 MCQs — Control Systems

> **Topic**: Nyquist Stability, Polar Plots, Gain/Phase Margin  
> **Source**: OCR'd Control Systems Lecture Notes  
> **Difficulty**: GATE HOTS (Higher Order Thinking Skills)  
> **Instructions**: Attempt all questions. Mark your answers (a/b/c/d). After attempting, check the answer key and topic-wise analysis to evaluate your preparation.

---

## SECTION A: Polar Plots (Q1–Q6)

---

**Q1.** The polar plot of $G(s)H(s) = \frac{1}{s^2(1+sT_1)(1+sT_2)}$ for $\omega: 0 \to \infty$ will have its tail angle and head angle respectively as:

(a) $-180^\circ, -360^\circ$  
(b) $-180^\circ, -270^\circ$  
(c) $-90^\circ, -360^\circ$  
(d) $-180^\circ, -90^\circ$

---

**Q2.** For the transfer function $G(s) = \frac{1}{s(1+sT_1)(1+sT_2)}$, the polar plot intersects the negative real axis at a frequency:

(a) $\omega = \frac{1}{\sqrt{T_1T_2}}$  
(b) $\omega = \frac{1}{T_1T_2}$  
(c) $\omega = \sqrt{T_1T_2}$  
(d) $\omega = T_1 + T_2$

---

**Q3.** A type-0, order-2 all-pole system has a polar plot that approaches the origin at an angle of:

(a) $0^\circ$  
(b) $-90^\circ$  
(c) $-180^\circ$  
(d) $-270^\circ$

---

**Q4.** The polar plot of $G(s) = \frac{s+2}{(s+1)(s+4)}$:

(a) Intersects the negative imaginary axis  
(b) Intersects the negative real axis  
(c) Does not intersect any axis other than positive real  
(d) Intersects both negative real and negative imaginary axes

---

**Q5.** When a pole is added to the transfer function $\frac{1}{1+sT}$ at the origin, the polar plot undergoes which change?

(a) Head rotates CW by $90^\circ$, tail unchanged  
(b) Both head and tail rotate CW by $90^\circ$  
(c) Head rotates CW by $180^\circ$, tail by $90^\circ$  
(d) Both head and tail rotate ACW by $90^\circ$

---

**Q6.** For a minimum-phase system with transfer function $G(s)H(s) = \frac{1}{s(1+sT_1)(1+sT_2)}$, the magnitude of $GH(j\omega)$ at the phase crossover frequency is:

(a) $\frac{T_1T_2}{T_1+T_2}$  
(b) $\frac{T_1+T_2}{T_1T_2}$  
(c) $\frac{1}{\sqrt{T_1T_2}}$  
(d) $\frac{T_1-T_2}{T_1+T_2}$

---

## SECTION B: Conformal Mapping & Principle of Arguments (Q7–Q10)

---

**Q7.** If a contour in the s-plane encloses 4 poles and 1 zero of $Q(s) = \frac{N(s)}{D(s)}$, and the contour is traversed clockwise, the $Q(s)$ plot in the $Q(s)$-plane will encircle the origin:

(a) 3 times clockwise  
(b) 3 times anticlockwise  
(c) 5 times anticlockwise  
(d) 5 times clockwise

---

**Q8.** Given $Q(s) = (s+2)(s+3)$ and a clockwise contour in s-plane enclosing both zeros, the number and direction of origin encirclements by the $Q(s)$ plot will be:

(a) 2, clockwise  
(b) 2, anticlockwise  
(c) 1, clockwise  
(d) None

---

**Q9.** If a contour in the s-plane passes through a pole of $Q(s)$, then:

(a) The $Q(s)$ plot will encircle the origin once  
(b) The $Q(s)$ plot will be an open curve, and encirclement concept is invalid  
(c) The number of encirclements is equal to the number of poles  
(d) The $Q(s)$ plot will be a straight line

---

**Q10.** The plot of $1+Q(s)$ for a given contour encircles the origin. This corresponds to the $Q(s)$ plot encircling the point:

(a) $(0, 0)$  
(b) $(1, 0)$  
(c) $(-1, 0)$  
(d) $(0, 1)$

---

## SECTION C: Nyquist Stability Criterion (Q11–Q16)

---

**Q11.** A unity feedback system has open-loop transfer function $G(s) = \frac{1}{(s-1)(s+2)(s+3)}$. If the Nyquist contour is taken clockwise, the Nyquist plot of $G(s)$ will encircle the point $(-1, j0)$:

(a) Never  
(b) Once clockwise  
(c) Once anticlockwise  
(d) Twice anticlockwise

---

**Q12.** The Nyquist plot of $G(s)H(s)$ encircles the point $(-1, j0)$ twice in the clockwise direction. If the open-loop system has no poles in the RHP, the number of closed-loop poles in the RHP is:

(a) 0  
(b) 1  
(c) 2  
(d) Cannot be determined

---

**Q13.** For a system with $G(s)H(s) = \frac{K(s+1)}{(s-2)(s+3)}$, the Nyquist contour is clockwise. For the closed-loop system to be stable, the number of anticlockwise encirclements of $(-1, j0)$ required is:

(a) 0  
(b) 1  
(c) 2  
(d) Depends on K

---

**Q14.** The Nyquist plot of a stable open-loop system is shown to encircle $(-1, j0)$ once clockwise. Which of the following is TRUE?

(a) Closed-loop system is stable  
(b) Closed-loop system has one pole in RHP  
(c) Closed-loop system has one zero in RHP  
(d) Open-loop system has one pole at origin

---

**Q15.** A system has $G(s)H(s) = \frac{1}{s^2 + a^2}$ where $a > 0$. For the Nyquist contour that avoids the poles on the imaginary axis, the number of encirclements of $(-1, j0)$ will be:

(a) 0  
(b) 1  
(c) 2  
(d) Cannot be determined without knowing $a$

---

**Q16.** Which of the following statements about the Nyquist criterion is FALSE?

(a) It can be applied to systems with transportation lag  
(b) It requires knowledge of open-loop poles in RHP  
(c) It gives both absolute and relative stability information  
(d) It cannot be applied to non-minimum phase systems

---

## SECTION D: Nyquist Plot Construction (Q17–Q21)

---

**Q17.** For $G(s)H(s) = \frac{1}{s^3}$, the number of infinite-radius clockwise semicircles in the Nyquist plot is:

(a) 1  
(b) 2  
(c) 3  
(d) 0

---

**Q18.** The Nyquist plot of $G(s)H(s) = \frac{1-s}{1+s}$ will have a magnitude that is:

(a) Varies with frequency  
(b) Always 1  
(c) Always less than 1  
(d) Always greater than 1

---

**Q19.** For a minimum-phase system with $P-Z = 3$, the number of zero-radius anticlockwise semicircles around the origin in the Nyquist plot is:

(a) 1  
(b) 2  
(c) 3  
(d) 4

---

**Q20.** The Nyquist plot of $G(s)H(s) = \frac{K}{s(1+sT)}$ for $K > 0$ will encircle the origin:

(a) Never  
(b) Once clockwise  
(c) Once anticlockwise  
(d) Twice clockwise

---

**Q21.** A type-2 system's Nyquist plot will have how many infinite-radius semicircles drawn clockwise?

(a) 1  
(b) 2  
(c) 3  
(d) Equal to the number of RHP poles

---

## SECTION E: Gain Margin & Phase Margin (Q22–Q30)

---

**Q22.** For a minimum-phase system, the gain margin is 6 dB and the phase margin is $45^\circ$. Which of the following is TRUE about the phase crossover frequency ($\omega_{pc}$) and gain crossover frequency ($\omega_{gc}$)?

(a) $\omega_{pc} > \omega_{gc}$  
(b) $\omega_{pc} = \omega_{gc}$  
(c) $\omega_{pc} < \omega_{gc}$  
(d) Cannot be determined

---

**Q23.** A unity feedback system has $G(s) = \frac{K}{s(s+5)(s+15)}$. The gain margin in dB is:

(a) $20\log_{10}300$  
(b) $20\log_{10}75$  
(c) $20\log_{10}150$  
(d) $20\log_{10}100$

---

**Q24.** For a system with open-loop transfer function $G(s)H(s) = \frac{5}{(s+1)(2s+1)(3s+1)}$, the phase crossover frequency is $f_c = 0.16$ Hz. The gain margin of the system is approximately:

(a) 0 dB  
(b) 2 dB  
(c) 4 dB  
(d) 6 dB

---

**Q25.** Which of the following systems has an infinite gain margin?

(a) $G(s)H(s) = \frac{1}{s(s+1)}$  
(b) $G(s)H(s) = \frac{1}{(s+1)(s+2)}$  
(c) $G(s)H(s) = \frac{1}{s(s+1)(s+2)}$  
(d) $G(s)H(s) = \frac{1}{s^2(s+1)}$

---

**Q26.** A system has a phase margin of $-30^\circ$. For a minimum-phase system, this indicates:

(a) The system is stable  
(b) The system is marginally stable  
(c) The system is unstable  
(d) The phase margin cannot be negative

---

**Q27.** A unity feedback system with $G(s) = \frac{K}{s(s+5)}$ has a phase margin of $45^\circ$. The value of K is:

(a) 25  
(b) $25\sqrt{2}$  
(c) $5\sqrt{2}$  
(d) 50

---

**Q28.** The addition of transportation lag $e^{-sT}$ to an open-loop transfer function:

(a) Affects both $\omega_{gc}$ and $\omega_{pc}$  
(b) Affects $\omega_{pc}$ but not $\omega_{gc}$  
(c) Affects $\omega_{gc}$ but not $\omega_{pc}$  
(d) Affects neither $\omega_{gc}$ nor $\omega_{pc}$

---

**Q29.** For a Type-II non-minimum phase system (poles in RHP, zeros in LHP), the system is stable when:

(a) $GM > 1$ and $PM > 0$  
(b) $GM < 1$ and $PM < 0$  
(c) $GM > 1$ and $PM < 0$  
(d) $GM < 1$ and $PM > 0$

---

**Q30.** A system with $G(s)H(s) = \frac{s}{(s+100)^3}$ has:

(a) Finite GM and finite PM  
(b) Infinite GM and finite PM  
(c) Finite GM and infinite PM  
(d) Infinite GM and infinite PM

---

---

## ANSWER KEY

| Q | Ans | Topic | Concept Tested |
|---|---|---|---|
| 1 | **a** | Polar Plots | ∠tail = -90°×type, ∠head = -90°×(P-Z) |
| 2 | **a** | Polar Plots | Phase crossover freq = 1/√(T₁T₂) |
| 3 | **c** | Polar Plots | Head angle = -90°×2 = -180° for order-2 |
| 4 | **c** | Polar Plots | Analysis shows ω for -90° is imaginary → no intersection |
| 5 | **b** | Polar Plots | Pole at origin → head & tail both rotate CW by 90° |
| 6 | **a** | Polar Plots | M = T₁T₂/(T₁+T₂) at ω = 1/√(T₁T₂) |
| 7 | **b** | Mapping | N = P-Z = 4-1 = 3, opposite direction → ACW |
| 8 | **a** | Mapping | Z=2, same direction → 2 CW encirclements |
| 9 | **b** | Mapping | Pole on boundary → open curve, encirclement invalid |
| 10 | **c** | Mapping | 1+Q(s)=0 → Q(s)=-1 → (-1,0) |
| 11 | **a** | NSC | P=1, solving CE gives Z=1, N=0 → no encirclement |
| 12 | **c** | NSC | N = P-Z → -2 = 0-Z → Z=2 |
| 13 | **b** | NSC | P=1 (pole at s=2), need N=P=1 for Z=0 |
| 14 | **b** | NSC | P=0, N=-1 → Z=1 → 1 CL pole in RHP |
| 15 | **a** | NSC | Poles on jω avoided; no RHP poles → stable |
| 16 | **d** | NSC | NSC applies to ALL systems including non-min phase |
| 17 | **c** | Nyquist Plot | Type=3 → 3 CW infinite SC |
| 18 | **b** | Nyquist Plot | |1-jω|/|1+jω| = 1 (all-pass) |
| 19 | **c** | Nyquist Plot | P-Z = 3 → 3 zero-radius ACW SC |
| 20 | **a** | Nyquist Plot | No RHP poles/zeros → N=0 |
| 21 | **b** | Nyquist Plot | Type-2 → 2 CW infinite SC |
| 22 | **a** | GM & PM | GM>0, PM>0 → ωpc > ωgc |
| 23 | **a** | GM | ωpc = √(5×15) = √75; M = 5/1500; GM=300 |
| 24 | **d** | GM | M=0.4942 → GM=20log(1/0.4942) ≈ 6dB |
| 25 | **b** | GM | Type-0/order-2, always stable → GM=∞ |
| 26 | **c** | PM | PM<0 for min-phase → unstable |
| 27 | **b** | PM | ωgc=5, K = 5√50 = 25√2 |
| 28 | **b** | Transport Lag | e^(-sT) affects φ (ωpc) but not |GH| (ωgc) |
| 29 | **b** | GM/PM Types | Type-II: stable ↔ GM<1 & PM<0 |
| 30 | **d** | GM & PM | ωpc→∞ (M=0→GM=∞), ωgc imaginary→PM=∞ |

---

## TOPIC-WISE PERFORMANCE ANALYSIS

Use this section to evaluate your preparation after checking answers.

| Topic | Questions | Max Score | Your Score | % |
|---|---|---|---|---|
| Polar Plots (Basics & Shapes) | Q1–Q6 | 6 | | |
| Conformal Mapping / Principle of Arguments | Q7–Q10 | 4 | | |
| Nyquist Stability Criterion (Conceptual) | Q11–Q16 | 6 | | |
| Nyquist Plot Construction | Q17–Q21 | 5 | | |
| Gain Margin (Calculation & Concept) | Q22–Q25, Q29–Q30 | 6 | | |
| Phase Margin (Calculation & Concept) | Q22, Q26–Q30 | 6 | | |
| Transportation Lag | Q28 | 1 | | |
| Minimum vs Non-minimum Phase | Q29, Q30 | 2 | | |
| **TOTAL** | **Q1–Q30** | **30** | | |

### Score Interpretation

| Score Range | Preparation Level | Recommended Action |
|---|---|---|
| 27–30 | **Excellent** | You're GATE-ready in Control Systems. Focus on time management and tricky numericals. |
| 22–26 | **Good** | Strong conceptual base. Review topics where you lost marks for finer nuances. |
| 15–21 | **Average** | Decent foundation but needs significant revision. Focus on NSC and GM/PM topics. |
| 8–14 | **Below Average** | Gaps in fundamentals. Start with polar plot basics and mapping principles. |
| 0–7 | **Needs Work** | Re-study the entire Nyquist/stability chapter from scratch. |

### Weak Topic Remediation Guide

- **Low on Polar Plots (Q1–Q6)**: Review ∠tail/∠head formulas, effect of adding poles, intersection with axes
- **Low on Mapping (Q7–Q10)**: Understand N = P-Z concept thoroughly. Practice with different pole/zero placements.
- **Low on NSC (Q11–Q16)**: Master N = P₊ - Z₊. Practice relating encirclements to CL stability.
- **Low on Nyquist Drawing (Q17–Q21)**: Remember: infinite SC = type, zero SC = P-Z. Study general shapes.
- **Low on GM/PM (Q22–Q30)**: Know formulas, ωpc vs ωgc, Type-I vs Type-II differences. Practice one numerical from each type.
- **Low on Transport Lag**: Remember: affects phase only, ωpc changes but ωgc unchanged.

---

### Detailed Solution Notes (Selected Questions)

**Q11**: $G(s) = \frac{1}{(s-1)(s+2)(s+3)}$. OL poles: -2, -3 (LHP), +1 (RHP) → P₊ = 1. CE: $(s-1)(s+2)(s+3) + 1 = 0$. Routh shows 1 sign change → Z₊ = 1. N = P₊ - Z₊ = 0.

**Q12**: N = -2 (CW, since N is -ve for CW). P = 0. N = P - Z → -2 = -Z → Z = 2.

**Q13**: $G(s)H(s) = \frac{K(s+1)}{(s-2)(s+3)}$ has one pole in RHP (s=2). For CL stability, Z₊ = 0. N = P₊ - Z₊ = 1. N positive means ACW. So 1 ACW encirclement needed.

**Q23**: For $G(s) = \frac{K}{s(s+5)(s+15)}$, corner freqs at 5 and 15. $\omega_{pc} = \sqrt{5 \times 15} = \sqrt{75}$. $M = \frac{5}{\omega\sqrt{\omega^2+25}\sqrt{\omega^2+225}}$ evaluated at ωpc gives M = 5/1500. GM = 1/M = 300. GM(dB) = 20log300.

**Q25**: $G(s)H(s) = \frac{1}{(s+1)(s+2)}$ → Type-0/Order-2. Polar plot never intersects -180° axis (ωpc = 0 is at +ve real axis). ∴ GM = ∞.

**Q29**: For Type-II (poles in RHP), the stability conditions are OPPOSITE: stable when GM < 1 (GM < 0 dB) and PM < 0°. This is because the Nyquist plot is inverted.

---

*Save this file for later reference. Fill in your scores in the table above after attempting.*
