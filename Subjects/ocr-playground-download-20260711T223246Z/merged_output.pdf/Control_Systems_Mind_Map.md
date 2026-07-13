# Control Systems - Comprehensive Mind Map (Nyquist & Stability Analysis)

---

## 1. Polar Plot
- **Definition**: Plot of G(jω)H(jω) on complex plane for ω ∈ [0, ∞)
  - x-axis: Re[GH], y-axis: Im[GH]
  - GH = |GH| ∠GH (magnitude & phase)
- **Steps to Draw**:
  1. Substitute s = jω → T(jω)
  2. Find T(j0⁺) = M₁∠φ₁ and T(j∞⁺) = M₂∠φ₂
  3. Rationalize → rectangular form (Re + jIm) (useful when M → ∞)
- **Polar Plots of Basic TFs**:
  - T(s) = s → jω = ω∠90° (positive imag axis)
  - T(s) = s² → -ω² = ω²∠180° (negative real axis)
  - T(s) = s + 5 → 5 + jω (vertical line at Re=5)
  - T(s) = 1/(1+sT) → Type-0/Order-1: semicircle in 4th quadrant
- **Effect of Adding Poles**:
  - Pole at origin: head & tail both rotate CW by 90°
  - Pole away from origin: only head rotates CW by 90°
  - General formula: ∠tail = -90° × type, ∠head = -90° × (P-Z)
- **General Shapes**:
  - 1/(1+sT) → semicircle (0° → -90°)
  - 1/s → -90° line
  - 1/s² → -180° line
  - 1/s(1+sT₁)(1+sT₂) → Type-1/Order-3, intersects -ve real axis at ω = 1/√(T₁T₂)
  - Higher order systems → spiral inward

---

## 2. Conformal Mapping (s-plane → Q(s)-plane)
- **Concept**: Each point in s-plane maps to a point in Q(s)-plane
- **Principle of Arguments**:
  - If contour in s-plane contains P poles and Z zeros of Q(s):
    - P > Z: Q(s) plot encircles origin (P-Z) times in opposite direction
    - Z > P: Q(s) plot encircles origin (Z-P) times in same direction
    - P = Z: no encirclement of origin
- **Rule of Mapping**: N = Pc - Zc
  - N = number of encirclements of origin
  - N > 0: opposite direction to s-plane contour
  - N < 0: same direction as s-plane contour
- **Limitations**:
  - Poles/zeros must NOT lie on contour boundary
- **Transformations of Plots**:
  - Q(s) → KQ(s): multiply all points by K
  - Q(s) → -Q(s): 180° rotation (same sense)
  - Q(s) → 1+Q(s): shift right by 1 unit
  - Q(s) → Ke^(jθ)Q(s): scale by K, rotate by θ

---

## 3. Nyquist Stability Criterion (NSC)
- **Nyquist Contour**: Closed path enclosing entire RHP of s-plane
  - Curve 1: s = jω (ω: 0⁺ → ∞) → Polar Plot
  - Curve 2: s = -jω → Inverse Polar Plot (mirror image about real axis)
  - Curve 3: s = lim(R→∞) Re^(jθ) (θ: π/2 → -π/2, CW) → infinite semicircle
  - Curve 4: s = lim(r→0) re^(jθ) (bypass origin if poles at origin)
- **NSC for G(s)H(s)**:
  - N = P₊ - Z₊
  - N = encirclements of origin by GH plot
  - P₊ = OL poles in RHP, Z₊ = OL zeros in RHP
- **NSC for 1+G(s)H(s)**:
  - N = encirclements of (-1, 0) by GH plot
  - N = P₊ - Z₊ (Z₊ = CL poles in RHP)
  - CL stable iff Z₊ = 0
- **Key Relations**:
  - Poles of 1+GH = poles of GH (same denominator)
  - Zeros of 1+GH = closed-loop poles
  - If OL system is stable (P₊ = 0), CL stable iff no encirclement of (-1,0)

---

## 4. Drawing Nyquist Plots
- **Procedure**:
  1. Draw polar plot (s = jω, ω: 0⁺ → ∞)
  2. Draw inverse polar plot (mirror image about real axis)
  3. Connect with infinite radius CW semicircles (count = type)
  4. Connect with zero radius ACW semicircles (count = P-Z)
- **Key Examples**:
  - G(s)H(s) = K(s+1)/[(s+0.5)(s-2)] → Non-min phase (pole in RHP)
  - G(s)H(s) = (1-s)/(1+s) → All-pass, M=1 constant
  - G(s)H(s) = 1/[(1+sT₁)(1+sT₂)] → Type-0/Order-2
  - G(s)H(s) = 1/s² → Type-2, 2 infinite CW semicircles
  - G(s)H(s) = K(1+s)²/s³ → Type-3, 3 CW semicircles
  - G(s)H(s) = 5(s+3)/[s(s-1)] → Non-min phase
  - G(s)H(s) = -1/[2s(1-20s)] → Non-min phase
- **Summary for Min-Phase Systems**:
  - ∠tail = -90° × type
  - ∠head = -90° × (P-Z)
  - No. of 0-radius ACW semicircles = P-Z
  - No. of ∞-radius CW semicircles = type

---

## 5. Stability Analysis
- **Enclosement (Polar Plot)** vs **Encirclement (Nyquist Plot)**
  - Polar plot is open curve → enclosement (point on right side = enclosed)
  - Nyquist plot is closed curve → encirclement
- **Stability using Polar Plot** (min-phase only):
  - (-1,0) not enclosed → stable
  - (-1,0) on plot → marginally stable
  - (-1,0) enclosed → unstable
- **Effect of Gain K**:
  - All points multiplied by K
  - As K varies, (-1,0) moves relative to Nyquist plot
  - Different K ranges give stable/unstable regions
- **Transportation Lag e^(-sT)**:
  - |e^(-jωT)| = 1 (magnitude unchanged)
  - ∠e^(-jωT) = -ωT (additional phase lag)
  - Reduces phase margin → reduces stability
  - Affects ωpc and GM but NOT ωgc
  - Infinite solutions → can't draw Nyquist plot conventionally

---

## 6. Gain Margin (GM)
- **Definition**: Amount of gain added to OLTF to make CLS marginally stable
  - GM = 1/|GH(jω)| at ω = ωpc
  - GM(dB) = 20 log(GM)
- **Types of Systems**:
  - **Type-I** (min-phase or zeros in RHP):
    - GM > 1 (GM > 0 dB) → stable
    - GM = 1 (GM = 0 dB) → marginally stable
    - GM < 1 (GM < 0 dB) → unstable
  - **Type-II** (poles in RHP):
    - GM < 1 (GM < 0 dB) → stable
    - GM = 1 (GM = 0 dB) → marginally stable
    - GM > 1 (GM > 0 dB) → unstable
- **GM from Routh Table**:
  - Set K₁G(s)H(s), find K₁ for marginal stability
  - Odd row zero + non-repeated jω roots → finite GM
  - Otherwise → GM = ∞ dB (always stable) or -∞ dB (always unstable)
- **Mathematical Calculation**:
  1. Find ωpc (phase crossover freq): ∠GH(jω) = -180°
  2. Compute M = |GH(jωpc)|
  3. GM = 1/M

---

## 7. Phase Margin (PM)
- **Definition**: Amount of phase added to OLTF to make CLS marginally stable
  - PM = 180° + ∠GH(jωgc)
  - ωgc = gain crossover freq (|GH| = 1)
- **Gain Crossover Frequency (ωgc)**:
  - Freq at which |GH(jω)| = 1
  - Point where polar plot intersects unit circle
- **PM from Nyquist Plot**:
  - At ωgc (unit distance from origin), measure angle from -180°
  - CW rotation needed to reach (-1,0) = PM
- **PM from Bode Plot**:
  - Find ωgc from magnitude plot (0 dB crossing)
  - Read phase at ωgc from phase plot
  - PM = 180° + phase
- **Stability from GM & PM**:
  - ωpc > ωgc → GM > 0, PM > 0 → stable
  - ωpc = ωgc → GM = 0, PM = 0 → marginally stable
  - ωpc < ωgc → GM < 0, PM < 0 → unstable
- **For Min-Phase & Type-I (zeros in RHP)**:
  - PM > 0 → stable, PM < 0 → unstable
- **For Type-II (poles in RHP)**:
  - PM < 0 → stable, PM > 0 → unstable

---

## 8. Relationship Between Plots
- **Polar Plot ↔ Nyquist Plot**:
  - Polar plot = part of Nyquist plot (curve 1)
  - Add mirror image (curve 2) + infinite SC (curve 3) + small SC (curve 4)
- **Bode Plot ↔ Nyquist Plot**:
  - Bode magnitude & phase → polar/Nyquist plot
  - GM from Bode: -MdB at ωpc
  - PM from Bode: 180° + phase at ωgc

---

> **Legend**: 
> - Type = number of poles at origin
> - P = total poles, Z = total zeros
> - P₊ = poles in RHP, Z₊ = zeros in RHP
> - ωpc = phase crossover frequency, ωgc = gain crossover frequency
> - GM = Gain Margin, PM = Phase Margin
> - CLS = Closed-Loop System, OLTF = Open-Loop Transfer Function
