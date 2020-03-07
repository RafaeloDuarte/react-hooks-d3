import { createStore } from 'redux'

const INITIAL_STATE = {
    data: [
        {
            title: "Arroz",
            preco: 'R$ 9,41',
            precoConcorrente: "11,08",
        },
        {
            title: "Arroz2",
            preco: 'R$ 9,41',
            precoConcorrente: "8,08",
        },
        {
            title: "Arroz3",
            preco: 'R$ 9,41',
            precoConcorrente: "10,08",
        },
        {
            title: "Arroz4",
            preco: 'R$ 9,41',
            precoConcorrente: "6,08",
        },
        {
            title: "Arroz5",
            precoSIT: 'R$ 9,41',
            precoConcorrente: "9,08",
        }
    ]
}

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return {
                ...state,
                data: [
                    ...state.data,
                    action.data
                ]
            }
        default:
            return state
    }
}

const store = createStore(courses)

export default store