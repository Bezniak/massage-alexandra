import {ROUTES} from "../config/routes.js";

export const createStore = (t) => ({
    massageTypes: [
        {
            id: 1,
            url: ROUTES.FACIAL_MASSAGE,
            img: '/facialMassageMobile.jpg',
            bigImg: '/facialMassageBig.jpg',
            name: t("massages.facial.name"),
            price: 35,
            time: 30,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.facial.desc_1"),
                    image: '/facial_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.facial.desc_2"),
                    image: '/facial_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.facial.desc_3"),
                    image: '/facial_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.facial.desc_4"),
                    image: '/facial_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.facial.desc_5"),
                    image: '/facial_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.facial.desc_6"),
                    image: '/facial_6.jpg'
                },
            ]
        },
        {
            id: 2,
            url: ROUTES.BACK_NACK_MASSAGE,
            img: '/backNackMassageMobile.jpg',
            bigImg: '/backNackBig.jpg',
            name: t("massages.backNack.name"),
            price: 35,
            time: 40,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.backNack.desc_1"),
                    image: '/backNack_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.backNack.desc_2"),
                    image: '/backNack_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.backNack.desc_3"),
                    image: '/backNack_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.backNack.desc_4"),
                    image: '/backNack_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.backNack.desc_5"),
                    image: '/backNack_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.backNack.desc_6"),
                    image: '/backNack_6.jpg'
                },
            ]
        },
        {
            id: 3,
            url: ROUTES.RELAX_MASSAGE,
            img: '/relaxMassageMobile.jpg',
            bigImg: '/relaxMassageBig.jpg',
            name: t("massages.relax.name"),
            price: 40,
            time: 50,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.relax.desc_1"),
                    image: '/relax_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.relax.desc_2"),
                    image: '/relax_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.relax.desc_3"),
                    image: '/relax_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.relax.desc_4"),
                    image: '/relax_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.relax.desc_5"),
                    image: '/relax_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.relax.desc_6"),
                    image: '/relax_6.jpg'
                },
            ]
        },
        {
            id: 4,
            url: ROUTES.NECK_SHOULDER_MASSAGE,
            img: '/neckShoulderMobile.jpg',
            bigImg: '/neckShoulderBig.jpg',
            name: t("massages.neckShoulder.name"),
            price: 20,
            time: 20,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.neckShoulder.desc_1"),
                    image: '/neckShoulder_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.neckShoulder.desc_2"),
                    image: '/neckShoulder_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.neckShoulder.desc_3"),
                    image: '/neckShoulder_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.neckShoulder.desc_4"),
                    image: '/neckShoulder_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.neckShoulder.desc_5"),
                    image: '/neckShoulder_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.neckShoulder.desc_6"),
                    image: '/neckShoulder_6.jpg'
                },
            ]
        },
        {
            id: 5,
            url: ROUTES.SPORT_MASSAGE,
            img: '/sportMobile.jpg',
            bigImg: '/sportBig.jpg',
            name: t("massages.sport.name"),
            price: 55,
            time: 60,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.sport.desc_1"),
                    image: '/sport_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.sport.desc_2"),
                    image: '/sport_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.sport.desc_3"),
                    image: '/sport_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.sport.desc_4"),
                    image: '/sport_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.sport.desc_5"),
                    image: '/sport_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.sport.desc_6"),
                    image: '/sport_6.jpg'
                },
            ]
        },
        {
            id: 6,
            url: ROUTES.CLASSIC_MASSAGE,
            img: '/classicMassageMobile.jpg',
            bigImg: '/classicMassageBig.jpg',
            name: t("massages.classic.name"),
            price: 50,
            time: 60,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.classic.desc_1"),
                    image: '/classic_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.classic.desc_2"),
                    image: '/classic_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.classic.desc_3"),
                    image: '/classic_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.classic.desc_4"),
                    image: '/classic_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.classic.desc_5"),
                    image: '/classic_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.classic.desc_6"),
                    image: '/classic_6.jpg'
                },
            ]
        },
        {
            id: 7,
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
            id: 8,
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
            id: 9,
            url: ROUTES.HONEY_MASSAGE,
            img: '/honeyMassageMobile.jpg',
            bigImg: '/honeyMassageBig.jpg',
            name: t("massages.honey.name"),
            price: 20,
            time: t("additionalTreatment"),
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.honey.desc_1"),
                    image: '/honey_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.honey.desc_2"),
                    image: '/honey_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.honey.desc_3"),
                    image: '/honey_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.honey.desc_4"),
                    image: '/honey_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.honey.desc_5"),
                    image: '/honey_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.honey.desc_6"),
                    image: '/honey_6.jpg'
                },
            ]
        },
        {
            id: 10,
            url: ROUTES.CUPPING_MASSAGE,
            img: '/cuppingMassageMobile.jpg',
            bigImg: '/cuppingMassageBig.jpg',
            name: t("massages.cupping.name"),
            price: 10,
            time: t("additionalTreatment"),
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.cupping.desc_1"),
                    image: '/cupping_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.cupping.desc_2"),
                    image: '/cupping_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.cupping.desc_3"),
                    image: '/cupping_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.cupping.desc_4"),
                    image: '/cupping_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.cupping.desc_5"),
                    image: '/cupping_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.cupping.desc_6"),
                    image: '/cupping_6.jpg'
                },
            ]
        },
    ]
});
