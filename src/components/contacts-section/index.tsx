import styles from './index.module.css';
import { COMPANY_EMAIL, COMPANY_PHONE_NUMBER } from '@/_constants';

export const ContactsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <p>
          Общество с ограниченной ответственностью «Сервисная компания
          «Динамика»
        </p>
        <p>
          ООО «СК «Динамика» Юридический/ почтовый адрес: РФ, 117624, г. Москва,
          ул. Поляны, д. 5, офис 74/4 Руководитель предприятия: Генеральный
          директор Шубин Константин Владимирович
        </p>
        <p>
          телефон:{' '}
          <a
            className={styles.company_link}
            href={`tel:${COMPANY_PHONE_NUMBER}`}
          >
            {COMPANY_PHONE_NUMBER}
          </a>
        </p>
        <p>
          Электронная почта:{' '}
          <a className={styles.company_link} href={`mailto:${COMPANY_EMAIL}`}>
            {COMPANY_EMAIL}
          </a>
        </p>
        <p>ИНН/КПП: 9727025036/772701001</p>
        <p>ОГРН: 1237700099108</p>
        <p>
          Дата регистрации: 07.02.2023 в налоговом органе по месту нахождения
          Инспекция Федеральной налоговой службы No 27 по г. Москве ЭДО: 1С-ЭДО
          АО «Калуга Астрал»: 2AEFF4F8612-D1C4-4521-9A2B-5B905FD4170F
        </p>
      </div>
      <p>
        Карточка предприятия:{' '}
        <a
          download='Карточка компании «Сервисная компания «Динамика»'
          href='./file/company-card.pdf'
          className={styles.company_link}
        >
          скачать карточку
        </a>
      </p>

      <div className={styles.map}>
        <a
          className={styles.link_one}
          href='https://yandex.ru/maps/213/moscow/?utm_medium=mapframe&utm_source=maps'
        >
          Москва
        </a>
        <a
          className={styles.link_two}
          href='https://yandex.ru/maps/213/moscow/house/ulitsa_polyany_5/Z04YcwJlSUcEQFtvfXl0dntlYQ==/?ll=37.559112%2C55.557059&utm_medium=mapframe&utm_source=maps&z=13.22'
        >
          Улица Поляны, 5 на карте Москвы, ближайшее метро Улица Скобелевская —
          Яндекс Карты
        </a>
        <iframe
          className={styles.iframe}
          src='https://yandex.ru/map-widget/v1/?ll=37.559112%2C55.557059&mode=whatshere&whatshere%5Bpoint%5D=37.555023%2C55.557765&whatshere%5Bzoom%5D=22&z=13.22'
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
