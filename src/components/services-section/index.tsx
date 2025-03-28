import styles from './index.module.css';

const GRID_ITEM = [
  {
    title: 'Сервисное обслуживание АСУ',
    description:
      'Проводим системное сервисное обслуживание электропривода и автоматизированных систем управления горного и нефтегазового оборудования',
  },
  {
    title: 'Электротехническая лаборатория',
    description:
      'Проводим испытания и измерения электрооборудования и электроустановок напряжением до 10 кВ',
  },
  {
    title: 'Пуско-наладочные работы',
    description:
      'Проводим комплексные пуско-наладочные работы механического и электрического горного и нефтегазового оборудования',
  },
  {
    title: 'Сервисное обслуживание систем охлаждения',
    description:
      'Проводим сервисное обслуживание, диагностику и ремонт холодильного и вентиляционного оборудования',
  },
  {
    title: 'Шеф-монтажные работы и авторский надзор',
    description:
      'Проводим шеф-монтажные работы, авторский надзор и гарантийный ремонт от лица производителя оборудования',
  },
  {
    title: 'Диагностика и ремонт оборудования АСУ',
    description:
      'Проводим диагностику и восстановление оборудования автоматизированных систем управления, поставляем новое оборудование',
  },
];

export const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {GRID_ITEM.map((item, index) => (
          <div key={index} className={styles.item}>
            <h2 className={styles.subtitle}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
