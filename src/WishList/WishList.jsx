import React from 'react'

function WishList({ wishes }) {
    return (
        <ul className='wish-list'>
            {wishes.map(wish => (
                <li
                    key={wish.id}
                    className={`
            wish-list__item 
            ${wish.completed ? 'wish-list__item--done' : ''}`
                    }
                >
                    <input
                        id={wish.id} type="checkbox"
                        checked={wish.completed}
                    />
                    <label htmlFor={wish.id}>
                        {wish.text}
                    </label>
                </li>
            ))}
        </ul>

    )
}

export default WishList