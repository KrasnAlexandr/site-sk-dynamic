import styles from './index.module.css';
import Image from 'next/image';
import MainImage from '../../../public/main-section.png';

export const MainSection = () => {
  return (
    <section className={styles.section}>
      <Image
        className={styles.image}
        src={MainImage}
        alt='Пример обсуживаемой техники команией "Динамика"'
      />

      <div className={styles.text}>
        <h1 className={styles.title}>Сервисная компания «ДИНАМИКА»</h1>
        <p className={styles.description}>
          сервисное обслуживание АСУ карьерного, горнодобывающего и
          нефтегазового оборудования
        </p>
      </div>

      <div className={styles.about}>
        <p className={styles.about_company}>
          ООО «Сервисная Компания «Динамика» (ООО «СК «Динамика»)
          специализируется на сервисном обслуживании электроприводов и
          автоматизированных систем управления карьерного, горнодобывающего и
          нефтегазового оборудования отечественного и импортного производства.
        </p>
        <br />
        <p className={styles.about_company}>
          Мы обладаем опытом системного обслуживания:
        </p>
        <ul>
          <li className={styles.list_item}>
            буровых установок БУ 4000/270 ЭК-БМ(Ч), 5000/320 ЭК-БМ(Ч), 6000/400
            ЭК-БМ(Ч), ZJ50 DBS, ZJ70 DBS, УСПК320, DRILLMEC АРС-225;
          </li>
          <li className={styles.list_item}>
            систем верхнего привода VARCO TDS 9/11, Уралмаш 320 ЭЧР, TESCO 350,
            ВЭП 320 и BENTEC 350;
          </li>
          <li className={styles.list_item}>
            главных приводов и информационных систем экскаваторов ЭКГ-5, ЭКГ-12,
            ЭКГ-18, ЭКГ-20, ЭКГ-32, ЭШ 20.90;
          </li>
          <li className={styles.list_item}>
            дробильно-размольного оборудования (дробилки
            мелкого/крупного/среднего дробления, дробилки щековые, мельницы).
          </li>
        </ul>
        <br />
        <p className={styles.about_company}>
          Для оперативного выполнения сервисного обслуживания, нами отработан
          процесс закупки запасных частей в РФ и за рубежом. Мы сотрудничаем с
          поставщиками ключевого оборудования автоматизации: ABB, Siemens,
          Rockwell Automation, WAGO, Schneider Electric и другими.
        </p>
      </div>
    </section>
  );
};
