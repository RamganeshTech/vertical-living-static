import CostCalculatorMain from './CostCalculatorMain'

const CostCalculatorMainPage = () => {
    return (
        <div className='w-full mx-auto max-w-7xl flex justify-center'>
            <CostCalculatorMain showCloseButton={false} fromPage={true} />
        </div>
    )
}

export default CostCalculatorMainPage