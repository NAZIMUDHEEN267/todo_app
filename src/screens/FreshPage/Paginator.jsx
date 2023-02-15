import React from 'react'
import { Pagination, CarouselDot } from './style'

const Paginator = ({ data, index }) => {
    return (
        <Pagination>
            {
                data.map((_, i) => {
                    if (i === index) {
                        return <CarouselDot style={{ width: 20 }} key={i.toString()} />
                    } else {
                        return <CarouselDot style={{ width: 10 }} key={i.toString()} />
                    }
                })
            }
        </Pagination>
    )
}

export default Paginator