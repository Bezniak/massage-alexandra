import {ROUTES} from "../config/routes.js";

export const createStore = (t) => ({
    massageTypes: [
        {
            id: 2,
            url: ROUTES.INDIVIDUAL_REJUVENATION_PROGRAM,
            img: '/individualMobile.jpg',
            bigImg: '/individualBig.jpg',
            name: t("massages.individual_rejuvenation_program.name"),
            price: 75,
            time: 90,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.individual_rejuvenation_program.desc_1"),
                    image: '/individual_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.individual_rejuvenation_program.desc_2"),
                    image: '/individual_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.individual_rejuvenation_program.desc_3"),
                    image: '/individual_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.individual_rejuvenation_program.desc_4"),
                    image: '/individual_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.individual_rejuvenation_program.desc_5"),
                    image: '/individual_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.individual_rejuvenation_program.desc_6"),
                    image: '/individual_6.jpg'
                },
            ]
        },
        {
            id: 2,
            url: ROUTES.REJUVENATING_FACIAL_MASSAGE,
            img: '/rejuvenatingMobile.jpg',
            bigImg: '/rejuvenatingBig.jpg',
            name: t("massages.rejuvenating_facial_massage.name"),
            price: 55,
            time: 60,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.rejuvenating_facial_massage.desc_1"),
                    image: '/rejuvenating_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.rejuvenating_facial_massage.desc_2"),
                    image: '/rejuvenating_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.rejuvenating_facial_massage.desc_3"),
                    image: '/rejuvenating_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.rejuvenating_facial_massage.desc_4"),
                    image: '/rejuvenating_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.rejuvenating_facial_massage.desc_5"),
                    image: '/rejuvenating_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.rejuvenating_facial_massage.desc_6"),
                    image: '/rejuvenating_6.jpg'
                },
            ]
        },
        {
            id: 2,
            url: ROUTES.LIFTING_MASK,
            img: '/liftingMaskMobile.jpg',
            bigImg: '/liftingMaskBig.jpg',
            name: t("massages.liftingMask.name"),
            price: 20,
            time: t("additionalTreatment"),
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.liftingMask.desc_1"),
                    image: '/liftingMask_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.liftingMask.desc_2"),
                    image: '/liftingMask_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.liftingMask.desc_3"),
                    image: '/liftingMask_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.liftingMask.desc_4"),
                    image: '/liftingMask_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.liftingMask.desc_5"),
                    image: '/liftingMask_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.liftingMask.desc_6"),
                    image: '/liftingMask_6.jpg'
                },
            ]
        },
        {
            id: 2,
            url: ROUTES.TAPING_ONE_ZONE,
            img: '/backMassageMobile.jpg',
            bigImg: '/backBig.jpg',
            name: t("massages.taping_one_zone.name"),
            price: 15,
            time: t("additionalTreatment"),
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.taping_one_zone.desc_1"),
                    image: '/back_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.taping_one_zone.desc_2"),
                    image: '/bac_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.taping_one_zone.desc_3"),
                    image: '/back_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.taping_one_zone.desc_4"),
                    image: '/back_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.taping_one_zone.desc_5"),
                    image: '/back_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.taping_one_zone.desc_6"),
                    image: '/back_6.jpg'
                },
            ]
        },
        {
            id: 2,
            url: ROUTES.BACK_MASSAGE,
            img: '/backMassageMobile.jpg',
            bigImg: '/backBig.jpg',
            name: t("massages.back.name"),
            price: 40,
            time: 40,
            additionalInfo: [
                {
                    id: 1,
                    text: t("massages.back.desc_1"),
                    image: '/back_1.jpg'
                },
                {
                    id: 2,
                    text: t("massages.back.desc_2"),
                    image: '/bac_2.jpg'
                },
                {
                    id: 3,
                    text: t("massages.back.desc_3"),
                    image: '/back_3.jpg'
                },
                {
                    id: 4,
                    text: t("massages.back.desc_4"),
                    image: '/back_4.jpg'
                },
                {
                    id: 5,
                    text: t("massages.back.desc_5"),
                    image: '/back_5.jpg'
                },
                {
                    id: 6,
                    text: t("massages.back.desc_6"),
                    image: '/back_6.jpg'
                },
            ]
        },
        {
            id: 4,
            url: ROUTES.NECK_SHOULDER_MASSAGE,
            img: '/neckShoulderMobile.jpg',
            bigImg: '/neckShoulderBig.jpg',
            name: t("massages.neckShoulder.name"),
            price: 25,
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
