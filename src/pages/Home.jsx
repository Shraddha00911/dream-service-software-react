import { Link } from "react-router-dom";
import {
  trusted, oldTools, painStats, arcSteps, layers, personas,
  storyStats, arcFeatures, products, testimonials, images,
} from "../data/siteData.js";

function TrustedRow({ title }) {
  return (
    <div className="trusted">
      <h6>{title}</h6>
      <ul>
        {trusted.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container center">
          <h1>The AI-based CRM and ERP for pest control.</h1>
          <p className="lead">
            Run the whole customer arc from handraiser to advocacy on one platform.
            <br />
            AI handles the handoffs. Pest-native modules handle the work.
          </p>
          <Link className="btn btn-primary btn-lg" to="/contact">Show me how Dream helps my operation</Link>
          <TrustedRow title="Trusted by leaders in pest control" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section">
        <div className="container center">
          <h2 className="h2">Most pest control softwares are patched together with duct tape.</h2>
          <p className="lead">At every handoff customers are lost and revenue suffers.</p>

          <div className="old-way">
            <span className="badge badge-red">✕ THE OLD WAY</span>
            <h3>Seven tools. Zero visibility.</h3>
            <p>
              CRM in one tool, ERP in another, scheduling in a third, dispatch in a fourth. QuickBooks for the books.
              A spreadsheet your office manager wrote in 2019. A paper compliance binder on the back-office floor.
            </p>
            <div className="chips">
              {oldTools.map((t) => (
                <span className="chip chip-red" key={t}>✕ {t}</span>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {painStats.map((s) => (
              <div className="stat-card" key={s.label}>
                <img src={s.img} alt="" />
                <span className="badge">{s.label}</span>
                <h2>{s.value}</h2>
                <p>{s.text}</p>
                <small>{s.foot}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DREAM WAY */}
      <section className="section bg-soft">
        <div className="container two-col">
          <div>
            <span className="eyebrow">The Dream Way</span>
            <h2 className="h2">One platform. Every handoff, handled.</h2>
            <p className="lead">
              The solution is Dream, one platform for the whole customer arc: handraiser → close → schedule → service →
              advocacy. All in one place.
            </p>
            <ul className="steps">
              {arcSteps.map(([a, b]) => (
                <li key={a}><strong>{a}</strong> — {b}</li>
              ))}
            </ul>
          </div>
          <div>
            <img className="rounded" src={images.chart} alt="Dream platform overview" />
          </div>
        </div>
      </section>

      {/* THREE LAYERS */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">The Solution</span>
          <h2 className="h2">Record. Intelligence. Action. All in one platform.</h2>
          <p className="lead">
            Dream is the only platform built to run all three inside the same system, so the automation and the data live
            together.
          </p>
          <div className="grid-3 text-left">
            {layers.map(([n, t, d]) => (
              <div className="card" key={n}>
                <span className="num">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="section bg-soft">
        <div className="container">
          <div className="center">
            <h2 className="h2">Purpose built for scaling pest control companies.</h2>
            <p className="lead">
              Dream is for the CEO who's watched revenue leak across the customer arc for too long. For the VP of Sales who
              knows the first call is the close. For the Office Manager whose CSRs are tab-switching between four systems
              by 9 AM.
            </p>
            <p><strong>Growth leaders who care about the trade and their customers.</strong></p>
          </div>
          <div className="grid-4">
            {personas.map(([role, kpi, text]) => (
              <div className="card" key={role}>
                <h3>{role}</h3>
                <span className="badge">KPIS</span>
                <p className="kpi">{kpi}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="center mt">
            <Link className="btn btn-primary" to="/contact">Book a Demo</Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="container two-col">
          <div>
            <h2 className="h2">Built inside a real pest control operation.</h2>
            <p>
              Dream was built in deep collaboration with pest control operators like ABC Home and Commercial by truly
              understanding the workflows that drive the business. Founded in 2012 for field reps, automated pricing,
              agreements and payments on the spot — that's what operators told us they needed. The platform grew from
              there, one workflow at a time.
            </p>
            <p>
              Fourteen years later we're trusted by over 1,500 other operators. Same founder, still privately owned.
            </p>
            <p>
              If you're closing WDO inspections on paper and your compliance binder lives on some desk, yeah, we know that
              operation. We built the thing that fixes it.
            </p>
          </div>
          <div className="story-stats">
            {storyStats.map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARC FEATURES */}
      <section className="section bg-soft">
        <div className="container center">
          <h2 className="h2">The whole customer arc on one platform.</h2>
          <p className="lead">handraiser → close → schedule → service → advocacy</p>
          <p>CRM and ERP together with AI handling the manual workflows at every handoff:</p>
          <div className="grid-3 text-left">
            {arcFeatures.map(([t, s]) => (
              <div className="card" key={t}>
                <h3>{t}</h3>
                <p className="muted">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">The Products</span>
          <h2 className="h2">Three products. One platform.</h2>
          <p className="lead">
            Start with CRM, ERP, or the full stack. Add Dream Pulse to close the loop from sale to advocacy — all in one
            platform.
          </p>
          <div className="grid-3 text-left">
            {products.map((p) => (
              <div className="card product" key={p.name}>
                <span className="badge">{p.tag}</span>
                <h4>{p.name}</h4>
                <h3>{p.headline}</h3>
                <p>{p.desc}</p>
                <ul className="check">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <Link className="link-arrow" to={p.to}>{p.cta}</Link>
              </div>
            ))}
          </div>

          <div className="callouts text-left">
            <div>
              <h4>Pest-native modules built for the trade.</h4>
              <p>
                WDO inspections that file in state-ready format, especially efficient in complex compliance states like
                California. E-Logbook compliance that doesn't live in a spreadsheet. Commercial flow that knows the
                difference between a quarterly contract and a one-off rodent job. Door-to-door that knows the difference
                between a no-soliciting sign and a real lead. Termite quoting that prices off linear footage, the way the
                operator actually sells it.
              </p>
              <p>We built these modules to run a real pest control operation.</p>
            </div>
            <div>
              <h4>10% more closes from the proposals you're already sending.</h4>
              <p>
                Most pest control teams send a proposal and wait for the lead to call back. Dream runs an automated 7-15
                touch sequence after every proposal: emails, SMS, follow-ups, scheduled drop-offs that lifts close rate by
                8-10%.
              </p>
              <h4>
                For a $10M operator with $3M of annual pipeline, that's roughly $250K to $300K in recovered revenue every
                year.
              </h4>
              <Link className="link-arrow" to="/contact">See how it works →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section bg-soft">
        <div className="container center">
          <span className="eyebrow">What operators say</span>
          <h2 className="h2">Trusted by industry leaders.</h2>
          <div className="grid-3 text-left">
            {testimonials.map((t) => (
              <div className="card testimonial" key={t.name + t.initial}>
                <span className="quote-mark">“</span>
                <p>{t.quote}</p>
                <div className="person">
                  <span className="avatar">{t.initial}</span>
                  <div>
                    <h4>{t.name}</h4>
                    <small>{t.company}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <TrustedRow title="TRUSTED BY LEADERS ACROSS THE INDUSTRY" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container center">
          <span className="eyebrow light">Ready to Dream big?</span>
          <h2>Built for pest. Built by operators. See what it does for yours.</h2>
          <p>
            Operators who switch to Dream stop losing leads at handoffs, cut seven tools down to one, and see the
            difference inside 90 days. Your demo takes 30 minutes.
          </p>
          <Link className="btn btn-light btn-lg" to="/contact">Book a Demo</Link>
          <small>No commitment. No sales pressure.</small>
        </div>
      </section>
    </>
  );
}
