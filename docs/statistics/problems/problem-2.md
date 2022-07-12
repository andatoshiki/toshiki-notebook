# Problem 2

Suppose $x_{1}, \ldots, x_{n}$ are known constants and that $Y_{1}, \ldots, Y_{n}$ satisfy the 'regression through the origin' model $Y_{i}=\beta x_{i}+\epsilon_{i}$, where the $\epsilon_{i}$ are independent $N\left(0, \sigma^{2}\right)$ random variables. Show that the maximum likelihood estimator of $\beta$ is $\hat{\beta}=\sum x_{i} Y_{i} / \sum x_{i}^{2}$ What is the distribution of $\hat{\beta} ?$

Suppose we have data giving the distance, in miles, by road $\left(y_{i}\right)$ and in a straight line $\left(x_{i}\right)$ for several different journeys. Why might we prefer to consider the model above to the model $Y_{i}=\alpha+\beta x_{i}+\epsilon_{i} ?$

## Solution

### Subproblem 1

Assuming the 'regression through the origin' model, if the straight-line distance between two locations is 12 miles, how would you use the model to predict the expected distance by road? How could we find a $95 \%$ confidence interval for this expected distance?

$Y_{i} \sim \text{Normal}$ (mean $=\beta x_{i}$, var $=\sigma^{2}$) (because $\epsilon_{i}$ is normal distributed and $x_{i}$ is nonrandom )

$$
\begin{aligned}
&l(\beta)=\prod_{i=1}^{n} \frac{1}{\sqrt{2 \pi \sigma^{2}}} \exp \left(-\frac{\left(y_{i}-\beta x_{i}\right)^{2}}{2 \sigma^{2}}\right)=\frac{1}{\left(2 \pi \sigma^{2}\right)^{n / 2}} \exp \left(-\sum_{i=1}^{n} \frac{\left(y_{i}-\beta x_{i}\right)^{2}}{2 \sigma^{2}}\right) \\
&L(\beta)=\log (l(\beta))=-\sum_{i=1}^{n} \frac{\left(y_{i}-\beta x_{i}\right)^{2}}{2 \sigma^{2}}-\frac{n}{2} \log \left(2 \pi \sigma^{2}\right) \\
&L^{\prime}(\beta)=0 \Longrightarrow-\sum_{i=1}^{n} \frac{\left(-x_{i}\right)\left(y_{i}-\beta x_{i}\right)}{2 \sigma^{2}}=0 \\
&\Longrightarrow \hat{\beta}=\frac{\sum_{i} x_{i} Y_{i}}{\sum_{i} x_{i}^{2}}, \quad\left(\text { easy to see } L^{\prime \prime}(\hat{\beta})<0, \text { so it is maximizer }\right)
\end{aligned}
$$

hence, proved.

### Subproblem 2

- If we were to use the model: $Y_{i}=\alpha+\beta x_{i}+e_{i}$, then we will infer that if $x=0$, value of $Y$ is some nonzero $\alpha$, but if straight line dist bw two points is 0 , then surely the distance by road will also be 0 hence above model will fail to capture this real life issue.

- Once we have fitted the model: $\hat{y}=\hat{\beta} x_{i}$, we can plug in $x_{i}=12$, in the formula to get the $\hat{y}:$ distance by road.

- need to find: Residual std.err $=s e=\sqrt{\frac{\sum_{i}\left(y_{i}-\hat{y}_{i}\right)^{2}}{n-2}}$ then, $t^{*}=t_{d f=n-2,0.025}$
$95 \% C I:\left(\hat{y} \pm t^{*} s e * \sqrt{\frac{1}{n}+\frac{\left(x_{i}-\bar{x}\right)^{2}}{\sum_{i}\left(x_{i}-\bar{x}\right)^{2}}}\right)$