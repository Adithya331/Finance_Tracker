import React from 'react'
import ExpenseBar from './ExpenseBar'


const tableData = [
    {
        amount: -200,
        date: new Date().toDateString(),
        category: "food"

    },
    {
        amount: -345,
        date: new Date().toDateString(),
        category: "Electronics"
    },
    {
        amount: 3455,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: 1015,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: -200,
        date: new Date().toDateString(),
        category: "food"

    },
    {
        amount: -345,
        date: new Date().toDateString(),
        category: "Electronics"
    },
    {
        amount: 3455,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: 1015,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: -200,
        date: new Date().toDateString(),
        category: "food"

    },
    {
        amount: -345,
        date: new Date().toDateString(),
        category: "Electronics"
    },
    {
        amount: 3455,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: 1015,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: -200,
        date: new Date().toDateString(),
        category: "food"

    },
    {
        amount: -345,
        date: new Date().toDateString(),
        category: "Electronics"
    },
    {
        amount: 3455,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: 1015,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: -200,
        date: new Date().toDateString(),
        category: "food"

    },
    {
        amount: -345,
        date: new Date().toDateString(),
        category: "Electronics"
    },
    {
        amount: 3455,
        date: new Date().toDateString(),
        category: "Returns"
    },
    {
        amount: 1015,
        date: new Date().toDateString(),
        category: "Returns"
    }
]

const Table = () => {
  return (
    <div className='p-2 h-96 overflow-y-scroll'>
      {tableData.map((x) => <ExpenseBar amount={x.amount} date={x.date} category={x.category}/>)}
    </div>
  )
}

export default Table
