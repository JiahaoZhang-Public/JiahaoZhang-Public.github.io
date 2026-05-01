---
permalink: /blog/
title: "Blog"
excerpt: "Topic and sub-topic organized blog posts."
author_profile: false
---

# Blog

This section is separate from the homepage.  
Add blog files under `_blog/` and optionally assign `topic` and `sub_topic` in front matter.

```yaml
---
title: "Your Blog Title"
date: 2026-02-23
topic: "Explainable AI"      # Optional
sub_topic: "Mechanistic XAI" # Optional
---
```

{% assign all_posts = site.blog | sort: "date" | reverse %}
{% assign topic_groups = all_posts | group_by: "topic" %}
{% assign has_categorized = false %}
{% assign has_uncategorized = false %}
{% for topic_group in topic_groups %}
  {% if topic_group.name == nil %}
    {% assign has_uncategorized = true %}
  {% elsif topic_group.name == "" %}
    {% assign has_uncategorized = true %}
  {% else %}
    {% assign has_categorized = true %}
  {% endif %}
{% endfor %}

<div class="blog-directory">
  {% if all_posts.size == 0 %}
    <p class="blog-empty">No blog posts yet.</p>
  {% else %}
    {% if has_categorized %}
      <h2 class="blog-directory__title">By Topic</h2>
      {% for topic_group in topic_groups %}
        {% if topic_group.name != nil %}
          {% if topic_group.name != "" %}
            {% assign posts_in_topic = topic_group.items | sort: "date" | reverse %}
            {% assign sub_topic_groups = posts_in_topic | group_by: "sub_topic" %}

            <section class="blog-topic-card">
              <h3 class="blog-topic-card__title">{{ topic_group.name }}</h3>

              {% for sub_topic_group in sub_topic_groups %}
                {% assign posts_in_sub_topic = sub_topic_group.items | sort: "date" | reverse %}
                <div class="blog-subtopic-block">
                  {% if sub_topic_group.name == nil %}
                    <h4 class="blog-subtopic-block__title">General</h4>
                  {% elsif sub_topic_group.name == "" %}
                    <h4 class="blog-subtopic-block__title">General</h4>
                  {% else %}
                    <h4 class="blog-subtopic-block__title">{{ sub_topic_group.name }}</h4>
                  {% endif %}

                  <ul class="blog-entry-list">
                    {% for post in posts_in_sub_topic %}
                      <li class="blog-entry">
                        <a class="blog-entry__title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        <div class="blog-entry__meta">
                          {% if post.date %}<span>{{ post.date | date: "%Y-%m-%d" }}</span>{% endif %}
                          <span class="blog-entry__pill">{{ topic_group.name }}</span>
                          {% if sub_topic_group.name != nil %}
                            {% if sub_topic_group.name != "" %}
                              <span class="blog-entry__pill">{{ sub_topic_group.name }}</span>
                            {% endif %}
                          {% endif %}
                        </div>
                        {% assign excerpt_text = post.excerpt | strip_html | strip_newlines %}
                        {% if excerpt_text != "" %}
                          <p class="blog-entry__excerpt">{{ excerpt_text }}</p>
                        {% endif %}
                      </li>
                    {% endfor %}
                  </ul>
                </div>
              {% endfor %}
            </section>
          {% endif %}
        {% endif %}
      {% endfor %}
    {% endif %}

    {% if has_uncategorized %}
      <h2 class="blog-directory__title">Uncategorized</h2>
      {% for topic_group in topic_groups %}
        {% if topic_group.name == nil %}
          {% assign posts_in_uncategorized = topic_group.items | sort: "date" | reverse %}
          <ul class="blog-entry-list">
            {% for post in posts_in_uncategorized %}
              <li class="blog-entry">
                <a class="blog-entry__title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <div class="blog-entry__meta">
                  {% if post.date %}<span>{{ post.date | date: "%Y-%m-%d" }}</span>{% endif %}
                  <span class="blog-entry__pill">Uncategorized</span>
                </div>
                {% assign excerpt_text = post.excerpt | strip_html | strip_newlines %}
                {% if excerpt_text != "" %}
                  <p class="blog-entry__excerpt">{{ excerpt_text }}</p>
                {% endif %}
              </li>
            {% endfor %}
          </ul>
        {% elsif topic_group.name == "" %}
          {% assign posts_in_uncategorized = topic_group.items | sort: "date" | reverse %}
          <ul class="blog-entry-list">
            {% for post in posts_in_uncategorized %}
              <li class="blog-entry">
                <a class="blog-entry__title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
                <div class="blog-entry__meta">
                  {% if post.date %}<span>{{ post.date | date: "%Y-%m-%d" }}</span>{% endif %}
                  <span class="blog-entry__pill">Uncategorized</span>
                </div>
                {% assign excerpt_text = post.excerpt | strip_html | strip_newlines %}
                {% if excerpt_text != "" %}
                  <p class="blog-entry__excerpt">{{ excerpt_text }}</p>
                {% endif %}
              </li>
            {% endfor %}
          </ul>
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endif %}
</div>
