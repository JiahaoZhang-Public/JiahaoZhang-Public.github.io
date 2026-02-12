---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am **Jiahao Zhang (张家豪)**, a first-year PhD student in the Machine Learning Department at MBZUAI.

I work on Explainable AI (XAI) as an interactive tool for understanding and steering models, and I evaluate it in AI4Sci settings.

PhD Supervisor: [Prof. Lijie Hu](https://lijie-hu.github.io/)  
Secondary Supervisor: [Prof. Kun Zhang](https://www.andrew.cmu.edu/user/kunz1/)

<!-- [Google Scholar](https://scholar.google.hk/citations?user=7CGK5UkAAAAJ) <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"> -->


# 🔥 News
- *2026.02*: &nbsp;🎉 Our paper **Controlling Repetition in Protein Language Models** was accepted as an **ICLR 2026 Poster**.
- *2025.08*: &nbsp;🎉 I joined MBZUAI as a phd student in Machine Learning Department, new start point here!

# 📝 Publications 

{% assign publications_sorted = site.data.publications | sort: "year" | reverse %}

{% assign published_papers = publications_sorted | where: "status", "published" %}
{% if published_papers.size > 0 %}
### Published
{% for paper in published_papers %}
{% include publication_item.html paper=paper %}
{% endfor %}
{% endif %}

{% assign under_review_papers = publications_sorted | where: "status", "under_review" %}
{% if under_review_papers.size > 0 %}
### Under review
{% for paper in under_review_papers %}
{% include publication_item.html paper=paper %}
{% endfor %}
{% endif %}

{% assign manuscript_papers = publications_sorted | where: "status", "manuscript" %}
{% if manuscript_papers.size > 0 %}
### Manuscript
{% for paper in manuscript_papers %}
{% include publication_item.html paper=paper %}
{% endfor %}
{% endif %}

*Author marks: `*` indicates single first author, `†` indicates co-first authors, and `✉` indicates corresponding author.*

# 🎖 Honors and Awards
- *2024.05*, Cloud Computing Application Award, UCB Data Science Discovery Program.
- *2023 - 2024*, Undergraduate Academic Excellence Scholarship.
- *2023.03*, Second Prize, College Student Mathematics Competition (Hubei Division).
- *2023.01*, Second Prize, Chinese Mathematics Competition.
- *2022.09*, Third Prize, China Undergraduate Mathematical Contest in Modeling.

# 📖 Educations
- *2025.08 - Present*, **Ph.D. in Machine Learning**, MBZUAI, Abu Dhabi, UAE. Supervisor: Prof. Lijie Hu.
- *2021.09 - 2025.06*, **B.Eng. in Electronic Information**, Huazhong University of Science and Technology (HUST), Wuhan, China. 
- *2024.01 - 2024.05*, **Visiting Student**, UC Berkeley, Berkeley, CA, USA. 

# 💻 Internships
- *2025.01 - 2025.07*, Research Assistant, Laboratory of Cell Ethology (CIS), Westlake University, Hangzhou, China.
- *2024.06 - 2024.12*, Research Assistant, Representation Learning Lab, Westlake University, Hangzhou, China.
- *2024.01 - 2024.05*, Data Science Research Intern, Grapedata (UC Berkeley), Berkeley, CA, USA.
- *2023.10 - 2023.12*, Research Assistant (Remote), AI Lab (Chaowei Xiao), University of Wisconsin-Madison.

# 🧾 Services
- Reviewer: ICML 2026
- Reviewer: ACL Rolling Review (Jan 2026)
- Reviewer: IEEE Computational Intelligence Magazine (IEEE CIM)
