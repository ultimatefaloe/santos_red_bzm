import { posts } from "./data.js";

// utils functions
const getElement = (selector) => document.querySelector(selector);
const escapeHTML = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatTitle = (title = "") =>
  title.charAt(0).toUpperCase() + title.slice(1);

const postCard = (post) => {
  const { userId, id, title, body } = post;

  // // create post card div
  // const article = document.createElement("article");
  // article.className = "post-card";
  // article.dataset.id = id;
  // const postCardHeader = div
  // postCardHeader.className = "post-card-header";
  // const postIdSpan = span
  // postIdSpan.className = "post-id"
  // postIdSpan.innerText = `POST #${id}`
  // const postUserIdSpan = span
  // postUserIdSpan.className = 'post-meta'
  // postUserIdSpan.innerText = `User ${id}`

  return `
  <article class="post-card" data-post-id="${id}">
              <div class="post-card-header">
                <span class="post-id">POST ${id}</span>
                <span class="post-meta">User ${userId}</span>
              </div>

              <h3 class="post-title">${escapeHTML(formatTitle(title))}</h3>
              <p class="post-excerpt">${escapeHTML(body)}</p>

              <div class="post-actions">
                <button
                  class="card-action view-button"
                  type="button"
                  data-id="${id}"
                >
                  View
                </button>
                <a class="card-action" href="./create.html?id=${id}"> Edit </a>
                <button
                  class="card-action delete delete-button"
                  type="button"
                  data-id="${id}"
                >
                  Delete
                </button>
              </div>
            </article>
  
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const postContainer = getElement("#postGrid");
  const loadingIndicator = getElement("#loadingState");
  const loadingSearchResult = getElement("#resultText");
  
  setTimeout(() => {
    loadingIndicator.classList.add("hidden");
    loadingSearchResult.classList.add("hidden");
    posts.forEach((post) => (postContainer.innerHTML += postCard(post)));
  }, 5000);
});
