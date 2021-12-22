import './Highlights.css'

const Highlight = ({ title, url }) => {
    return (
        <div className='Highlight'>
            <div className='neumorphism'>
                <img src={url} />
            </div>
            <span>{title}</span>
        </div>


    )
}

export const Highlights = () => {
    return (
        <div className='Highlights'>
            <Highlight
                title={"Shopping"}
                url={"https://img.icons8.com/external-kmg-design-outline-color-kmg-design/32/000000/external-shopping-bag-e-commerce-kmg-design-outline-color-kmg-design-1.png"}
            />
            <Highlight
                title={"Life Style"}
                url={"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-carrot-vegetable-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"}
            />
            <Highlight
                title={"Trend ?!"}
                url={"https://img.icons8.com/external-tal-revivo-color-tal-revivo/72/external-bar-chart-in-down-trend-after-market-crash-business-color-tal-revivo.png"}
            />
            <Highlight
                title={'Travel'}
                url={"https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-plane-summer-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"}
            />
            <Highlight
                title={'My Dog'}
                url={"https://img.icons8.com/external-bearicons-outline-color-bearicons/64/000000/external-Dog-chinese-new-year-bearicons-outline-color-bearicons.png"}
            />
        </div>
    )
}