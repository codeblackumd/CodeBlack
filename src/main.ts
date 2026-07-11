import "./style.css";
import { eventPhotos, events, leaders, posts, sponsorLevels, stats } from "./data/site";

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Missing app root");
}

const eventCards = events
  .map(
    (event) => `
      <article class="event-card" data-status="${event.status}">
        <div class="event-card__meta">
          <span>${event.status}</span>
          <span>${event.date}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <dl>
          <div>
            <dt>Time</dt>
            <dd>${event.time}</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>${event.location}</dd>
          </div>
        </dl>
      </article>
    `,
  )
  .join("");

const leaderCards = leaders
  .map(
    (leader, index) => `
      <article class="leader-card${index >= 4 ? " leader-card--extra" : ""}">
        <span>${leader.role}</span>
        <h3>${leader.name}</h3>
        <p>${leader.focus}</p>
        <a class="linkedin-link" href="${leader.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      </article>
    `,
  )
  .join("");

const sponsorCards = sponsorLevels
  .map(
    (level) => `
      <article class="sponsor-card">
        <div>
          <span>${level.name}</span>
          <strong>${level.price}</strong>
        </div>
        <ul>
          ${level.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </article>
    `,
  )
  .join("");

const postCards = posts
  .map(
    (post) => `
      <article class="post-card">
        <span>${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
      </article>
    `,
  )
  .join("");

const photoCards = eventPhotos
  .map(
    (photo) => `
      <figure class="photo-card">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
        <figcaption>${photo.label}</figcaption>
      </figure>
    `,
  )
  .join("");

app.innerHTML = `
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Code Black home">
      <img src="/assets/codeblack-logo.png" alt="" />
      <span>Code: BLACK</span>
    </a>
    <nav aria-label="Primary navigation">
      <a href="#events">Events</a>
      <a href="#leadership">Leadership</a>
      <a href="#sponsors">Sponsors</a>
      <a href="#opportunities">Opportunities</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <img class="hero__image" src="/assets/eboard-group.jpg" alt="Code Black executive board group photo" />
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <p class="eyebrow">University of Maryland student tech organization</p>
        <h1>A home for Black technologists to build, belong, and break into tech.</h1>
        <p>
          Code: BLACK grows a social community of developers and tech enthusiasts
          while helping underrepresented students access professional, academic,
          and entrepreneurial opportunities.
        </p>
        <div class="hero__actions">
          <a class="button button--primary" href="#events">Explore events</a>
          <a class="button button--secondary" href="#sponsors">Partner with us</a>
        </div>
      </div>
    </section>

    <section class="stat-strip" aria-label="Code Black impact">
      ${stats
        .map(
          (stat) => `
            <article>
              <strong>${stat.value}</strong>
              <span>${stat.label}</span>
            </article>
          `,
        )
        .join("")}
    </section>

    <section class="section split-section" id="mission">
      <div class="section-kicker">
        <p class="eyebrow">Mission</p>
        <h2>Retention, representation, and real technical growth.</h2>
      </div>
      <div class="mission-copy">
        <p>
          Established in 2017, Code: BLACK supports underrepresented communities
          in Computer Science, Information Science, and other tech-related majors
          at the University of Maryland.
        </p>
        <p>
          The organization is built around community, candid conversation,
          hands-on career preparation, and events that help members move from
          curiosity to confidence.
        </p>
      </div>
    </section>

    <section class="section programs" aria-label="Programs">
      <article>
        <span>01</span>
        <h3>Career launch</h3>
        <p>Recruiting prep, intern panels, resume reviews, technical workshops, and opportunity sharing.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Community nights</h3>
        <p>Game nights, cookouts, social events, mentorship, and member-led gatherings that make tech feel less lonely.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Sponsor access</h3>
        <p>Tech talks, BlackFest involvement, campus engagement, and direct connections between members and industry teams.</p>
      </article>
    </section>

    <section class="section section--warm" id="events">
      <div class="section-heading">
        <p class="eyebrow">Upcoming</p>
        <h2>Events that mix culture, career, and community.</h2>
      </div>
      <div class="event-controls" aria-label="Event filters">
        <button class="filter-button is-active" type="button" data-filter="All">All</button>
        <button class="filter-button" type="button" data-filter="Featured">Featured</button>
        <button class="filter-button" type="button" data-filter="Upcoming">Upcoming</button>
        <button class="filter-button" type="button" data-filter="Recruiting">Recruiting</button>
      </div>
      <div class="event-grid">${eventCards}</div>
    </section>

    <section class="section blackfest">
      <div class="blackfest__media">
        <video controls playsinline preload="metadata">
          <source src="/assets/blackfest-website-recap.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <p class="eyebrow">BlackFest</p>
        <h2>The spring celebration that brings the network outside.</h2>
        <p>
          BlackFest is Code: BLACK's end-of-year event and a high-energy moment
          for sponsors, members, alumni, and friends to connect beyond the
          classroom.
        </p>
      </div>
    </section>

    <section class="section photo-story" id="photos">
      <div class="section-heading">
        <p class="eyebrow">Event Photos</p>
        <h2>Real rooms, real workshops, real community.</h2>
      </div>
      <div class="photo-grid">${photoCards}</div>
    </section>

    <section class="section" id="leadership">
      <div class="section-heading">
        <p class="eyebrow">Leadership</p>
        <h2>Executive board.</h2>
      </div>
      <div class="leader-layout">
        <img src="/assets/eboard-group.jpg" alt="Code Black executive board" />
        <div>
          <div class="leader-grid">${leaderCards}</div>
          <button class="button board-toggle" type="button" id="board-toggle" aria-expanded="false">See full board</button>
        </div>
      </div>
    </section>

    <section class="section section--ink" id="sponsors">
      <div class="section-heading">
        <p class="eyebrow">Sponsors</p>
        <h2>Partner with a growing UMD tech community.</h2>
        <p>
          Sponsor packages create direct pathways for companies to host events,
          support member development, and build long-term relationships with
          emerging technologists at the University of Maryland.
        </p>
      </div>
      <div class="sponsor-grid">${sponsorCards}</div>
    </section>

    <section class="section content-preview" id="opportunities">
      <div class="section-heading">
        <p class="eyebrow">Opportunities</p>
        <h2>Blog and opportunity feed.</h2>
      </div>
      <div class="post-grid">${postCards}</div>
    </section>
  </main>

  <footer class="site-footer">
    <img src="/assets/codeblack-logo-alt.png" alt="" />
    <div>
      <strong>Code: BLACK</strong>
      <p>University of Maryland</p>
    </div>
    <a href="mailto:codeblackumd@gmail.com">codeblackumd@gmail.com</a>
  </footer>
`;

const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".filter-button"));
const eventElements = Array.from(document.querySelectorAll<HTMLElement>(".event-card"));

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter || "All";
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    eventElements.forEach((card) => {
      card.hidden = filter !== "All" && card.dataset.status !== filter;
    });
  });
});

const boardToggle = document.querySelector<HTMLButtonElement>("#board-toggle");
const leaderGrid = document.querySelector<HTMLElement>(".leader-grid");
const extraLeaders = Array.from(document.querySelectorAll<HTMLElement>(".leader-card--extra"));

const setBoardExpanded = (isExpanded: boolean) => {
  leaderGrid?.classList.toggle("is-expanded", isExpanded);

  if (!boardToggle) {
    return;
  }

  boardToggle.setAttribute("aria-expanded", String(isExpanded));
  boardToggle.textContent = isExpanded ? "Show less" : "See full board";
};

if (boardToggle && leaderGrid) {
  boardToggle.hidden = extraLeaders.length === 0;
  setBoardExpanded(false);

  boardToggle.addEventListener("click", () => {
    setBoardExpanded(!leaderGrid.classList.contains("is-expanded"));
  });
}
