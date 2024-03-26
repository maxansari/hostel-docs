import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Team',
    Svg: require('@site/static/img/team.svg').default,
    description: (
      <>
        We are a team of developers who are passionate about creating a better hostel experience for students.
        <br/><Link to="/team"><button className="button button--primary button--md">More Details</button></Link>
      </>
    ),
  },
  {
    title: 'Project Mentor',
    Svg: require('@site/static/img/mentor.svg').default,
    description: (
      <>
        This Project is taking place under the Guidance of Dr. Kapil Gupta (asst. Professor) at NIT Kurukshetra, Computer Application Departement
      </>
    ),
  },
  {
    title: 'Project',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Here is the link to our project check out our project and enjoy
        <br/><Link to="https://nitkkrhostels.live"><button className="button button--primary button--md">Goto Project</button></Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
