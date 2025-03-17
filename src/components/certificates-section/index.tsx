import styles from './index.module.css';
import Image from 'next/image';
import CertificateOne from '../../../public/certificates/certificate-1.jpg';
import CertificateTwo from '../../../public/certificates/certificate-2.jpg';
import CertificateThree from '../../../public/certificates/certificate-3.jpg';
import CertificateFour from '../../../public/certificates/certificate-4.jpg';

export const CertificatesSection = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.subtitle}>
        Одним из ключевых конкурентных преимуществ ООО «СК «Динамика» является
        высококвалифицированное инженерное ядро. Персонал ООО «СК «Динамика»
        системно проходит обучение по программам повышения квалификации в работе
        с современным оборудованием автоматизированных систем управления,
        осваивает навыки программирования промышленных логических контроллеров.
      </h4>
      <h4 className={styles.subtitle}>
        В 2024 г. наши специалисты прошли обучение в АО «Силовые машины – ЗТЛ,
        ЛМЗ, Электросила, Энергомашэкспорт» (АО «Силовые машины») по программе
        «Эксплуатация, техническое обслуживание, диагностика и ремонт
        комплектного устройства Экскаватора».
      </h4>

      <div className={styles.images}>
        <Image
          className={styles.image}
          src={CertificateOne}
          alt='Сертификат на разрешение проведение работ'
          width={300}
        />
        <Image
          className={styles.image}
          src={CertificateTwo}
          alt='Сертификат на разрешение проведение работ'
          width={600}
        />
        <Image
          className={styles.image}
          src={CertificateThree}
          alt='Сертификат на разрешение проведение работ'
          width={300}
        />
        <Image
          className={styles.image}
          src={CertificateFour}
          alt='Сертификат на разрешение проведение работ'
          width={600}
        />
      </div>
    </section>
  );
};
