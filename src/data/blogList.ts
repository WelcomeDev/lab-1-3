export interface BlogListItemModel {
    id: string;
    title: string;
    coverUrl: string;
    description: string;
    publishedAt: Date;
    project: {
        title: string;
        coverUrl: string;
    };
}

const mockProject1: BlogListItemModel['project'] = {
    title: 'Я обязательно закрою семак...',
    coverUrl: 'https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667',
};

const mockProject2: BlogListItemModel['project'] = {
    title: 'Зачтите лапку...',
    coverUrl: 'http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png',
};

function deepCopy(obj: any) {
    return JSON.parse(JSON.stringify(obj));
}

function duplicate(amount: number) {
    const raw = [
        {
            title: 'Анализ изменения поведенческих паттернов сотрудников при депремировании.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
            coverUrl: 'https://memepedia.ru/wp-content/uploads/2016/03/hide-the-pain-harold.jpg',
            publishedAt: '03/29/2023',
            project: mockProject1,
        },
        {
            title: 'Как мы уничтожили Aliexpress в России.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. ',
            coverUrl: 'https://avatars.dzeninfra.ru/get-zen_doc/2815454/pub_5eca38798ab0d465106a38a9_5eca38e0564da33d1c6c2419/scale_1200',
            publishedAt: '03/23/2023',
            project: mockProject2,
        },
    ];

    const res: BlogListItemModel[] = [];

    return Array.from({ length: amount })
                .reduce((accum: any[]) => accum.concat(deepCopy(raw)), res)
                .map((it, index) => {
                    it.id = index;
                    it.date = new Date(it.date);
                    return it;
                });
}

export const blogList: BlogListItemModel[] = duplicate(10);
