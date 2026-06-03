# HR Employee Attrition Prediction — EDA & Machine Learning

A course project portfolio for **Machine Learning (25ECSC212)** at **KLE Technological University**,
presenting an end-to-end analysis of the **IBM HR Employee Attrition** dataset — from exploratory
data analysis through model building, evaluation, and business recommendations.

> **Live site:** enable GitHub Pages → *Settings → Pages → Deploy from branch → `main` / root*,
> then visit `https://saroshkumar-ops.github.io/ML-Portfolio/`.

---

## 📌 What this project does

Predicts whether an employee is likely to **leave** (`Attrition = Yes`) or **stay** (`Attrition = No`)
— a supervised binary classification problem — and turns the result into an **actionable,
decision-support tool**: it identifies at-risk employees, explains *why* they're at risk, and
recommends what HR can do to retain them.

---

## 🗂️ Site structure

The portfolio follows the standard course-project flow:

| Section | Contents |
|---|---|
| **Home** | Course details, project overview, creator & faculty attribution |
| **Introduction** | Problem statement, objectives, and the class-imbalance challenge |
| **Exploratory Data Analysis** | Domain & dataset · preprocessing · visual analysis · feature selection |
| **Machine Learning** | Model building, evaluation, results table, confusion matrix & model selection |
| **Learning Reflections** | Key takeaways, business insights, and compounding risk factors |

---

## 📊 Dataset

- **Source:** IBM HR Analytics Employee Attrition & Performance dataset (Kaggle).
- **Size:** 1,470 employees × 35 attributes.
- **Target:** `Attrition` (Yes / No) — imbalanced at **~16% leave / ~84% stay**.
- **Quality:** no missing values.

---

## 🔬 Method (summary)

1. **Preprocessing** — drop identifier/constant columns, label-encode categoricals, stratified
   80/20 split, `StandardScaler` for Logistic Regression (trees use raw features).
2. **EDA** — quantified the drivers of attrition (overtime, income, age, tenure, job role, etc.).
3. **Modelling** — trained and compared multiple classifiers, including ensemble methods.
4. **Evaluation** — Accuracy, Precision, **Recall**, F1, ROC-AUC and confusion matrices, with
   **recall** as the deciding metric (missing a leaver is costlier than a false alarm).

### Results

| Model | Accuracy | Precision | Recall | F1 | ROC-AUC |
|---|---|---|---|---|---|
| Logistic Regression | 0.874 | 0.625 | 0.532 | 0.575 | 0.811 |
| Stacking Ensemble | 0.884 | 0.697 | 0.489 | 0.575 | 0.820 |
| Gradient Boosting | 0.704 | 0.328 | 0.809 | 0.466 | 0.814 |
| Random Forest | 0.806 | 0.424 | 0.596 | 0.496 | 0.800 |
| Bagging Ensemble | 0.772 | 0.378 | 0.660 | 0.481 | 0.784 |
| Decision Tree | 0.694 | 0.269 | 0.532 | 0.357 | 0.696 |

> On imbalanced data, raw accuracy is misleading — an 84%-accurate model can be achieved by
> predicting that nobody leaves. F1, recall, and ROC-AUC are what demonstrate real value.

---

## 🧰 Tech stack

`HTML` · `CSS` · `JavaScript` (the site) — and `Python` · `pandas` · `NumPy` · `scikit-learn`
· `matplotlib` · `seaborn` (the analysis).

The site is **dependency-free** — no build step, no frameworks — so it can be hosted directly on
GitHub Pages.

---

## 📁 Repository layout

```
index.html      structure & content
styles.css      modern dark theme, fully responsive
script.js       carousel, lightbox, scroll effects, mobile nav
assets/         charts, figures, and institute logo
README.md       this file
```

## ▶️ Run locally

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000
```

---

© Sarosh Kumar · KLE Technological University
