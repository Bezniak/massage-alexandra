import {ROUTES} from "../config/routes.js";

export const createStore = (t) => ({
    massageTypes: [
        {
            id: 1,
            url: ROUTES.FOOT_MASSAGE,
            img: '/footMassageVertical.jpg',
            bigImg: '/footMassage.jpg',
            name: t("massages.foot.name"),
            price: 25,
            time: 30,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.foot.desc_1"),
                    image: '/foot_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.foot.desc_2"),
                    image: '/foot_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.foot.desc_3"),
                    image: '/foot_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.foot.desc_4"),
                    image: '/foot_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.foot.desc_5"),
                    image: '/foot_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.foot.desc_6"),
                    image: '/foot_6.jpg'
                },
            ]


        },
        {
            id: 2,
            url: ROUTES.HAND_MASSAGE,
            img: '/handMassageMobile.jpg',
            bigImg: '/handMassageBig.jpg',
            name: t("massages.hand.name"),
            price: 25,
            time: 30,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.hand.desc_1"),
                    image: '/hand_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.hand.desc_2"),
                    image: '/hand_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.hand.desc_3"),
                    image: '/hand_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.hand.desc_4"),
                    image: '/hand_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.hand.desc_5"),
                    image: '/hand_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.hand.desc_6"),
                    image: '/hand_6.jpg'
                },
            ]


        },
        {
            id: 2,
            url: ROUTES.HAND_MASSAGE,
            img: '/handMassageMobile.jpg',
            bigImg: '/handMassageBig.jpg',
            name: t("massages.hand.name"),
            price: 25,
            time: 30,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.hand.desc_1"),
                    image: '/hand_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.hand.desc_2"),
                    image: '/hand_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.hand.desc_3"),
                    image: '/hand_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.hand.desc_4"),
                    image: '/hand_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.hand.desc_5"),
                    image: '/hand_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.hand.desc_6"),
                    image: '/hand_6.jpg'
                },
            ]


        },
    ]
});
