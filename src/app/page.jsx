export const metadata = {
  title: 'M Rocket Solutions home page'
}

export default async function Home({}) {
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          M Rocket Solutions
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          Web Development Consultancy
        </p>
      </div>

      <ul className="divide-y divide-gray-200">
        <li className="py-12" key="1-intro">
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  Intro
                </h2>
                <div className="prose max-w-none text-gray-500">
                  Hello, we are M Rocket Solutions, a web development / cloud
                  consultancy from Belgrade, Serbia.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="py-12" key="2-about">
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  About
                </h2>
                <div className="prose max-w-none text-gray-500">
                  We are a small team of experienced developers, with a wide
                  range of skills and knowledge in the web development field. We
                  are here to help you with your projects, from small to big,
                  from simple to complex, from consulting to development.
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="py-12 pb-0" key="3-help">
          <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
            <div className="space-y-5 xl:col-span-3">
              <div className="space-y-6">
                <h2 className="text-2xl leading-8 font-bold tracking-tight">
                  We can help you with:
                </h2>
                <div className="prose max-w-none text-gray-500">
                  Frontend:
                  <ul>
                    <li key="3-1-react">React (Next.js)</li>
                    <li key="3-2-angular">Angular</li>
                    <li key="3-3-test">
                      Jest, Enzyme, react-testing-library, Cypress
                    </li>
                    <li key="3-4-css">
                      Styles in .scss, cssModules, postcss/cssnext, styled
                      components
                    </li>
                    <li key="3-5-js">Everything JavaScript</li>
                  </ul>
                  Backend:
                  <ul>
                    <li key="3-6-node">
                      Nodejs with Express, Nest.js, Hapi.js
                    </li>
                    <li key="3-7-db">MongoDB, PostgreSQL</li>
                    <li key="3-8-protocol">GraphQL, REST</li>
                  </ul>
                  Infrastructure:
                  <ul>
                    <li key="3-9-aws">AWS</li>
                    <li key="3-10-ci">
                      CI/CD with Github Actions, SemaphoreCI
                    </li>
                    <li key="3-11-docker">Docker</li>
                  </ul>
                  Processes:
                  <ul>
                    <li key="3-12-agile">Agile, Scrum, Kanban</li>
                    <li key="3-13-code">Code reviews, pair programming</li>
                    <li key="3-14-docs">Documentation, testing</li>
                    <li key="3-15-cd">Continuous Deployment</li>
                    <li key="3-16-tdd">TDD</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
