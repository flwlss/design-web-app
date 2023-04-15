import { format } from 'date-fns'

// -------------------------------------------------------------------------------------------------------------------------
// design

import kebabHouse1 from '../assets/images/portfolio/design/kebabHouse/kebabHouse1.png'
import kebabHouse2 from '../assets/images/portfolio/design/kebabHouse/kebabHouse2.png'
import kebabHouse3 from '../assets/images/portfolio/design/kebabHouse/kebabHouse3.png'
import kebabHouse4 from '../assets/images/portfolio/design/kebabHouse/kebabHouse4.png'
import kebabHouse5 from '../assets/images/portfolio/design/kebabHouse/kebabHouse5.png'

import sanatorium1 from '../assets/images/portfolio/design/sanatorium/sanatorium1.jpg'
import sanatorium2 from '../assets/images/portfolio/design/sanatorium/sanatorium2.jpg'
import sanatorium3 from '../assets/images/portfolio/design/sanatorium/sanatorium3.jpg'
import sanatorium4 from '../assets/images/portfolio/design/sanatorium/sanatorium4.jpg'
import sanatorium5 from '../assets/images/portfolio/design/sanatorium/sanatorium5.jpg'

import greenQuartalFlat1 from '../assets/images/portfolio/design/greenQuartalFlat/greenQuartalFlat1.jpg'
import greenQuartalFlat2 from '../assets/images/portfolio/design/greenQuartalFlat/greenQuartalFlat2.jpg'
import greenQuartalFlat3 from '../assets/images/portfolio/design/greenQuartalFlat/greenQuartalFlat3.jpg'
import greenQuartalFlat4 from '../assets/images/portfolio/design/greenQuartalFlat/greenQuartalFlat4.jpg'
import greenQuartalFlat5 from '../assets/images/portfolio/design/greenQuartalFlat/greenQuartalFlat5.jpg'

import designEmpty1 from '../assets/images/portfolio/design/designEmpty1.png'
import designEmpty2 from '../assets/images/portfolio/design/designEmpty2.png'
import designEmpty3 from '../assets/images/portfolio/design/designEmpty3.png'

// design
// -------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------
// planning

import house190x140_1 from '../assets/images/portfolio/planning/house190x140/house190x140_1.png'
import house190x140_2 from '../assets/images/portfolio/planning/house190x140/house190x140_2.png'
import house190x140_3 from '../assets/images/portfolio/planning/house190x140/house190x140_3.png'

import house100x150_1 from '../assets/images/portfolio/planning/house100x150/house100x150_1.png'
import house100x150_2 from '../assets/images/portfolio/planning/house100x150/house100x150_2.png'
import house100x150_3 from '../assets/images/portfolio/planning/house100x150/house100x150_3.png'

import terrace150x150_1 from '../assets/images/portfolio/planning/terrace150x150/terrace150x150_1.png'
import terrace150x150_2 from '../assets/images/portfolio/planning/terrace150x150/terrace150x150_2.png'
import terrace150x150_3 from '../assets/images/portfolio/planning/terrace150x150/terrace150x150_3.png'
import terrace150x150_4 from '../assets/images/portfolio/planning/terrace150x150/terrace150x150_4.png'

import banya140x130_1 from '../assets/images/portfolio/planning/banya140x130/banya140x130_1.png'
import banya140x130_2 from '../assets/images/portfolio/planning/banya140x130/banya140x130_2.png'
import banya140x130_3 from '../assets/images/portfolio/planning/banya140x130/banya140x130_3.png'
import banya140x130_4 from '../assets/images/portfolio/planning/banya140x130/banya140x130_4.png'

// planning
// -------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------
// fitodesign

import fitodesignEmpty1 from '../assets/images/portfolio/fitodesign/fitodesignEmpty1.png'
import fitodesignEmpty2 from '../assets/images/portfolio/fitodesign/fitodesignEmpty2.png'
import fitodesignEmpty3 from '../assets/images/portfolio/fitodesign/fitodesignEmpty3.png'
import fitodesignEmpty4 from '../assets/images/portfolio/fitodesign/fitodesignEmpty4.png'
import fitodesignEmpty5 from '../assets/images/portfolio/fitodesign/fitodesignEmpty5.png'
import fitodesignEmpty6 from '../assets/images/portfolio/fitodesign/fitodesignEmpty6.png'

// fitodesign
// -------------------------------------------------------------------------------------------------------------------------

export const progress = [
  {
    title: '2+',
    text: 'международных проектов'
  },
  {
    title: '250+',
    text: 'реализованных проектов'
  },
  {
    title: +format(new Date(), 'yy') - 9 + '+',
    text: 'лет опыта'
  }
]

export const services = [
  {
    id: 1,
    subtitle: 'дизайн-проект',
    text: 'Дизайн-проект интерьера представляет собой комплексное решение по организации пространства, состоящее из разработки концепции будущего интерьера, подбора всех отделочных материалов и мебели, а также полного набора рабочих чертежей и 3D визуализации.',
    cost: ['ЖИЛЫЕ от 1 000 руб/ м²', 'КОММЕРЧЕСКИЕ от 500 руб/ м²']
  },
  {
    id: 2,
    subtitle: 'планировочные решения',
    text: 'Услуга перепланировки предполагает разработку трех вариантов расположения мебели и оборудования в рамках существующей площади объекта. Разработка вариантов ведется с учетом соблюдения всех СНИПов и норм для дальнейшего согласования утвержденного планировочного решения в необходимых инстанциях.',
    cost: ['ДО 100 м² от 60 000 руб.', 'ОТ 100 м² от 70 000 руб.']
  },
  {
    id: 3,
    subtitle: 'авторский надзор',
    text: 'Авторский надзор представляет собой контроль автора проекта за его реализацией. Дизайнер решает все возникающие в процессе ремонта вопросы по проекту, а также ведет контроль своевременной поставки материалов на объект, рабочих чертежей и 3D визуализации.',
    cost: ['ДО 150 м² от 30 000 руб/мес.', 'ДО 300 м² от 40 000 руб/мес.']
  },
  {
    id: 4,
    subtitle: 'декорирование',
    text: 'Декорирование – это завершающий штрих в разработке дизайна вашего интерьера, который предполагает подбор аксессуаров, текстиля, картин и других декоративных элементов.',
    cost: ['СТОИМОСТЬ ВЫЕЗДА ДИЗАЙНЕРА от 1 500 руб.']
  },
  {
    id: 5,
    subtitle: 'айдентика (для коммерческих проектов)',
    text: 'Мы уверены, что одними из ключевых факторов успеха любого заведения являются фирменный стиль и айдентика. Только комплексное решение позволяет создать успешный завершенный образ Вашего бизнеса.',
    cost: ['РАЗРАБОТКА ФИРМЕННОГО СТИЛЯ от 100 000 руб.']
  },
  {
    id: 6,
    subtitle: 'архитектурное проектирование',
    text: 'Основным направлением архитектурного проектирования нашей компании являются частные дома. В ходе разработки общей архитектурной концепции будущего дома, важно не только спроектировать внешний облик здания, но и грамотно организовать внутреннее пространство. Это позволяет максимально рационально и гармонично спланировать пространство для разработки последующего дизайна интерьера.',
    cost: ['ИНДИВИДУАЛЬНЫЙ ПРОЕКТ ДОМА от 1 000 руб/ м²']
  }
]

export const meeting = [
  {
    subtitle: 'Знакомство',
    text: 'Если вы впервые заказываете дизайн-проект, то у вас наверняка очень много вопросов, и мы с радостью ответим на каждый из них. Вы можете написать нам в WhatsApp, Telegram или позвонить.'
  },
  {
    subtitle: 'Расскажите нам о вашем проекте',
    text: 'Чтобы мы могли сделать вам коммерческое предложение, нам необходимо знать площадь вашего объекта, и какой вид услуги вам нужен.'
  },
  {
    subtitle: 'Мы расскажем о процессе',
    text: 'Из чего состоит проект? Какие этапы работ предстоит пройти? Как будет проходить строительство? Сколько будет стоить реализация? И еще множество вопросов, на которые мы с удовольствием вам ответим.'
  },
  {
    subtitle: 'Встреча',
    text: 'Если вы из Санкт-Петербурга или Новокузнецка, то встречу назначаем у нас в офисе. Если вы из другого города, то встречу проводим по видеосвязи. На этой встрече мы с вами детально обсуждаем ваш будущий проект и на примерах показываем специфику нашей работы.'
  },
  {
    subtitle: 'Заключение контракта',
    text: 'Когда вы получили всю необходимую информацию и составили в голове представление, о том как будет проходить работа, вам остается принять решение, после которого мы подпишем контракт и начнем создавать проект вашей мечты.'
  }
]

export const servicesCard = [
  {
    id: 1,
    features: [
      'Что входит:',
      '1. Составление технического задания.',
      '2. Обмер помещения.',
      '3. Разработка трех вариантов планировочных решений.',
      '4. Концепция будущего интерьера(коллажи, эскизы, стилевые аналоги).',
      '5. Работа со смежниками, подготовка коммерческих предложений от поставщиков с учетом обозначенного Вами бюджета.Индивидуальный расчет стоимости наполнения помещения.',
      '6. Подбор всех отделочных материалов, мебели и светильников.',
      '7. Совместные поездки по салонам и магазинам, наши сотрудники ответят на все ваши вопросы, и сориентируют во всем многообразии брендов.',
      '8. Полный комплект рабочих чертежей.',
      '9. Спецификация оборудования и материалов.',
      '10. Фотореалистичные визуализации.',
      '11. Смета на чистовые материалы и оборудование по всем выбранным позициям с указанием стоимости и контактов поставщиков.',
      '12. Смета на строительные работы.'
    ],
    cost: [`ЖИЛЫЕ\nот\n1 000 руб/ м²`, 'КОММЕРЧЕСКИЕ\nот\n500 руб/ м²']
  },
  {
    id: 2,
    features: [
      'Данная услуга может быть полезна как тем, кто находится в поиске квартиры и хочет рассмотреть все возможные варианты организации пространства своего будущего жилья, так и тем, у кого недвижимость уже в собственности, и он хочет максимально функционально распределить ее площадь.',
      'Что входит:',
      '1. Замер помещения.',
      '2. Обмерный чертеж с указанием всех размеров и привязкой инженерных коммуникаций',
      '3. Разработка трех вариантов планировочных решений.',
      '*при дальнейшем заключении договора на полный дизайн-проект стоимость услуги входит в стоимость проекта',
    ],
    cost: ['ДО 100 м²\nот\n60 000 руб.', 'ОТ 100 м²\nот\n70 000 руб.']
  },
  {
    id: 3,
    features: [
      'Услуга включает в себя:',
      '1. Контроль дизайнера за реализацией разработанного им проекта;',
      '2. Внесение необходимых корректировок и изменений в чертежи, которые могут понадобиться для реализации проекта;',
      '3. Выезд дизайнера на объект 2 раза в месяц, взаимодействие с прорабом, консультации по телефону;',
      '4. Согласование с заказчиком счетов на отделочные материалы, оборудование и мебель;',
      '5. Согласование графика поставки отделочных материалов на объект в соответствии с графиком строительных работ.',
    ],
    cost: ['ДО 150 м²\nот\n30 000 руб/мес.', 'ДО 300 м²\nот\n40 000 руб/мес.']
  },
  {
    id: 4,
    features: [
      'Мы предлагаем услугу декорирования как для реализованных нами интерьеров, так и для любых других пространств, требующих легкого обновления.',
      'Декорирование помещения включает в себя:',
      '1. Консультации по выбору предметов интерьера, декоративных элементов и аксессуаров;',
      '2. Подбор осветительного оборудования: люстр, настольных ламп, торшеров, бра и т.д.;',
      '3. Подбор текстиля: штор, гардин ролетов и жалюзи;',
      '4. Подбор постельного белья, покрывал, декоративных подушек и скатертей;',
      '5. Подбор аксессуаров: картин, репродукций, скульптур, ваз и т.д. Поездки по магазинам и салонам.',
    ],
    cost: ['СТОИМОСТЬ ВЫЕЗДА\nДИЗАЙНЕРА\nот 1 500 руб.']
  },
  {
    id: 5,
    features: [
      'Услуга включает в себя:',
      '1. Анализ рынка конкурентов;',
      '2. Создание оригинального названия, соответствующего общей концепции заведения;',
      '3. Разработка фирменного стиля, который включает: товарный знак, логотип и варианты его подачи, вывеску, слоган и другие элементы;',
      '4. Подготовка презентации оформления и брендирования необходимых корпоративных элементов (листовки, буклеты, меню, рекламные баннеры);',
      '5. Web дизайн (оформление страниц в социальных сетях, интернет реклама, дизайн сайтов).',
      'Стоимость рассчитывается в индивидуальном порядке в зависимости от сложности и объема поставленных задач.',
    ],
    cost: ['РАЗРАБОТКА\nФИРМЕННОГО СТИЛЯ\nот 100 000 руб.']
  },
  {
    id: 6,
    features: [
      'Стоимость рассчитывается в индивидуальном порядке в зависимости от сложности объекта. Конструктивные решения (КР) Архитектурные решения (АР) Инженерные решения (ОВ, ВК, АВР, ЭС, слаботочные системы, кондиционирование)'
    ],
    cost: ['ИНДИВИДУАЛЬНЫЙ\nПРОЕКТ ДОМА\nот 1 000 руб/ м²']
  }
]

export const employees = [
  {
    imageSrc: '/images/employees/julia.jpg',
    phone: '+7 (923) 465-99-77',
    name: 'Юлия Кошкина',
    post: 'АРХИТЕКТОР, TEAM LEAD, FOUNDER',
    description: 'Окончила Сибирский Государственный\nУниверситет в г. Новокузнецк\nпо специальности "Архитектура"\n\nЗанимается деятельностью в областях\nархитектуры и дизайна более 10 лет\n\nНаправления деятельности:\n- Архитектурное проектирование\n- Дизайн интерьера\n- Проектирование общих конструктивных\nи архитектурных решений зданий и сооружений'
  },
  {
    imageSrc: '/images/employees/andrey.jpg',
    phone: '+7 (951) 604-80-60',
    name: 'Андрей Витомский',
    post: 'АРХИТЕКТОР, ДИЗАЙНЕР, CEO',
    description: 'Окончил Новосибирский Государственный\nУниверситет архитектуры, дизайна и искусств\nим А.Д. Крячкова по специальности "Архитектура"\n\nНаправления деятельности:\n- Архитектурное проектирование\n- Дизайн интерьера\nЗанимается деятельностью в областях\nархитектуры и дизайна более 4-х лет'
  },
  {
    imageSrc: '/images/employees/nikita.jpg',
    phone: '+7 (913) 295-92-49',
    name: 'Никита Жуков',
    post: 'ДИЗАЙНЕР, CEO',
    description: 'Окончил Новосибирский Государственный\nАрхитектурно-Строительный Университет\n(СИБСТРИН) по специальности "Архитектура"\n\nНаправления деятельности:\n- Дизайн интерьера\n- Фитодизайн\nЗанимается деятельностью в области\nдизайна интерьера более 4-х лет'
  },
  {
    imageSrc: '/images/employees/roma.jpg',
    name: 'Роман Агеев',
    post: 'ИНЖЕНЕР-КОНСТРУКТОР',
    description: 'Окончил Новосибирский Государственный\nАрхитектурно-Строительный Университет\n(СИБСТРИН) по специальности "Архитектура"\n\nНаправления деятельности:\n- Архитектурное проектирование\n- Металлоконструкции\nЗанимается деятельностью в областях\nархитектуры и металлоконструкций\nболее 4-х лет'
  },
]

export const portfolioSquares = [
  {
    id: 'design',
    squares: [
      {
        name: 'kebab-house',
        mainImage: kebabHouse1,
        images: [kebabHouse1, kebabHouse2, kebabHouse3, kebabHouse4, kebabHouse5]
      },
      {
        name: 'sanatorium-prokopyevskiy',
        mainImage: sanatorium2,
        images: [sanatorium1, sanatorium2, sanatorium3, sanatorium4, sanatorium5]
      },
      {
        name: 'green-quartal-flat',
        mainImage: greenQuartalFlat1,
        images: [greenQuartalFlat1, greenQuartalFlat2, greenQuartalFlat3, greenQuartalFlat4, greenQuartalFlat5]
      },
      {
        mainImage: designEmpty1,
      },
      {
        mainImage: designEmpty2,
      },
      {
        mainImage: designEmpty3,
      },
    ],
  },
  {
    id: 'planning',
    squares: [
      {
        name: 'house-190x140',
        mainImage: house190x140_1,
        images: [house190x140_1, house190x140_2, house190x140_3]
      },
      {
        name: 'house-100x150',
        mainImage: house100x150_1,
        images: [house100x150_1, house100x150_2, house100x150_3]
      },
      {
        name: 'terrace-150x150',
        mainImage: terrace150x150_1,
        images: [terrace150x150_1, terrace150x150_2, terrace150x150_3, terrace150x150_4]
      },
      {
        name: 'banya-140x130',
        mainImage: banya140x130_1,
        images: [banya140x130_1, banya140x130_2, banya140x130_3, banya140x130_4]
      },
    ],
  },
  {
    id: 'fitodesign',
    squares: [
      {
        mainImage: fitodesignEmpty1,
      },
      {
        mainImage: fitodesignEmpty2,
      },
      {
        mainImage: fitodesignEmpty3,
      },
      {
        mainImage: fitodesignEmpty4,
      },
      {
        mainImage: fitodesignEmpty5,
      },
      {
        mainImage: fitodesignEmpty6,
      },
    ],
  },
]

export const companyContacts = [
  {
    title: 'часы\nработы:',
    text: 'пн-пт: 10-19\nсб-вc: выходной\n(по договоренности)'
  },
  {
    title: 'почта:',
    text: 'architecturedesign@mail.ru'
  }
]

export const socials = [
  {
    href: 'https://wa.me/+79234792799',
    svgSrc: '/images/icons/whatsapp.svg'
  },
  {
    href: 'https://t.me/fooyzi',
    svgSrc: '/images/icons/telegram.svg'
  }
]