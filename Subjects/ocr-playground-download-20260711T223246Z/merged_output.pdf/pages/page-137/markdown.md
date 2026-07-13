# Effect of adding zeroes in Nyquist plot

$$G(s)H(s) = \frac{1+4s}{s^2(1+s)(1+2s)}$$

polar plot

$$\begin{array}{l} \angle tail = -90 \times type = -90 \times 2 \\ = -180^\circ \end{array}$$

$$\begin{array}{l} \angle head = -90 \times (P-Z) \\ = -90 \times (4-1) = -270^\circ \end{array}$$

$$GH(j\omega) = \frac{1+j4\omega}{(j\omega)^2(1+j2\omega)(1+j\omega)}$$

$$\phi = \tan^{-1}4\omega - 180 - \tan^{-1}\omega - \tan^{-1}2\omega$$

phase crossover

$$\phi = -180$$

$$-180 = -180 + \tan^{-1}4\omega - \tan^{-1}\omega - \tan^{-1}2\omega$$

$$\begin{array}{l} \tan^{-1}4\omega = \tan^{-1}\omega + \tan^{-1}2\omega \\ = \tan^{-1} \frac{3\omega}{1-2\omega^2} \end{array}$$

$$4\omega = \frac{3\omega}{1-2\omega^2}$$

$$4-8\omega^2 = 3$$

$$8\omega^2 = 1$$

$$\omega = \frac{1}{2\sqrt{2}}$$