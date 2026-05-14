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

**Research Interest.** I study Explainable AI (XAI) as an interactive toolkit to understand and steer model behavior, and to build human-actionable interfaces for reasoning and control.

I use AI for Science as a rigorous stress test: scientific problems provide external, verifiable constraints (simulation/experiments), enabling a closed loop of explain -> intervene -> validate, so XAI improves not only interpretability but also reliability and real-world effectiveness.

PhD Supervisor: [Prof. Lijie Hu](https://lijie-hu.github.io/)  
Secondary Supervisor: [Prof. Kun Zhang](https://www.andrew.cmu.edu/user/kunz1/)

<!-- [Google Scholar](https://scholar.google.hk/citations?user=7CGK5UkAAAAJ) <img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"> -->


# 🔥 News
- *2026.05*: &nbsp;📄 New preprint on arXiv: **From Instance Selection to Fixed-Pool Data Recipe Search for Supervised Fine-Tuning** (AutoSelection). [[arXiv]](https://arxiv.org/abs/2605.12944) [[code]](https://github.com/w253/AutoSelection)
- *2026.05*: &nbsp;🎉 Our paper **Bayesian Gated Non-Negative Contrastive Learning** was accepted to **ICML 2026** (with Peng Cui, co-first; Lijie Hu, corresponding).
- *2026.04*: &nbsp;📝 Submitted our manuscript **Solar-driven evapofiltration enables co-production of lithium and freshwater from extreme brines** to **Nature Sustainability**.
- *2026.03*: &nbsp;🚀 Launched **AgentReviewers** ([agentreviewers.com](https://agentreviewers.com/)) — a submission and peer-review platform built for AI-generated papers — and open-sourced **[Agent Kernel](https://github.com/JiahaoZhang-Public/agent-kernel)**.
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

# 🚀 Projects

<div class="project-carousel" data-project-carousel>
  <div class="project-carousel__viewport">
    {% for project in site.data.projects %}
    <div class="project-carousel__slide{% if forloop.first %} is-active{% endif %}" data-index="{{ forloop.index0 }}">
      {% include project_item.html project=project %}
    </div>
    {% endfor %}
  </div>
  <div class="project-carousel__nav">
    <button type="button" class="project-carousel__btn" data-direction="prev" aria-label="Previous project">← Prev</button>
    <span class="project-carousel__counter" data-counter>1 / {{ site.data.projects.size }}</span>
    <button type="button" class="project-carousel__btn" data-direction="next" aria-label="Next project">Next →</button>
  </div>
  <div class="project-carousel__dots" data-dots>
    {% for project in site.data.projects %}
    <button type="button" class="project-carousel__dot{% if forloop.first %} is-active{% endif %}" data-dot-index="{{ forloop.index0 }}" aria-label="Go to project {{ forloop.index }}"></button>
    {% endfor %}
  </div>
</div>

<script>
(function () {
  document.querySelectorAll('[data-project-carousel]').forEach(function (root) {
    var slides = Array.prototype.slice.call(root.querySelectorAll('.project-carousel__slide'));
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-dot-index]'));
    var counter = root.querySelector('[data-counter]');
    var prevBtn = root.querySelector('[data-direction="prev"]');
    var nextBtn = root.querySelector('[data-direction="next"]');
    var total = slides.length;
    if (total === 0) return;
    var idx = 0;

    function render() {
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
      if (counter) counter.textContent = (idx + 1) + ' / ' + total;
      if (prevBtn) prevBtn.disabled = (idx === 0);
      if (nextBtn) nextBtn.disabled = (idx === total - 1);
    }

    if (prevBtn) prevBtn.addEventListener('click', function () { if (idx > 0) { idx--; render(); } });
    if (nextBtn) nextBtn.addEventListener('click', function () { if (idx < total - 1) { idx++; render(); } });
    dots.forEach(function (d, i) {
      d.addEventListener('click', function () { idx = i; render(); });
    });

    // Keyboard support when carousel is focused / hovered
    root.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' && idx > 0) { idx--; render(); }
      else if (e.key === 'ArrowRight' && idx < total - 1) { idx++; render(); }
    });

    render();
  });
})();
</script>

# 🛠 Open Source Tools
- **MEAP** (**Lead**)  
  [GitHub](https://github.com/JiahaoZhang-Public/MEAP) | [TestPyPI](https://test.pypi.org/project/meap/)

# 🎖 Honors and Awards
- *2026.02*, MBZUAI Conference Travel Grant.
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
