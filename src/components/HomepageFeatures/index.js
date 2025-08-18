import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Apuntes e exemplos 📖',
    description: (
      <>
        Documentación completa dos temas de Programación de Servizos e Procesos (PSP) de 2º DAM, con apuntes e exemplos prácticos.
      </>
    ),
  },
  {
    title: 'Exercicios prácticos ✍️',
    description: (
      <>
        Exercicios prácticos para reforzar os conceptos aprendidos en cada tema, con solucións e explicacións detalladas.
      </>
    ),
  },
  {
    title: 'Vídeos explicativos 🎥',
    description: (
      <>
        Vídeos explicativos para cada tema, que facilitan a comprensión dos conceptos e a súa aplicación práctica.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
