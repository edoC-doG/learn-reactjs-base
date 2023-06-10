import React, { useEffect } from 'react';
import { useState } from 'react';
import TodoList from 'features/Todo/components/TodoList';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import { useHistory, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { useMemo } from 'react';
import TodoForm from 'features/Todo/components/TodoForm';
ListPage.propTypes = {
    
};

function ListPage(props) {
    const initTodoList = [
        {
            id:1,
            title:'EAT',
            status: 'new'
        },
        {
            id:2,
            title:'SLEEP',
            status: 'new'
        },
        {
            id:3,
            title:'CODE',
            status: 'completed'
        }   
    ]

    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()
    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setFilteredStus] = useState(() => {
        const param = queryString.parse(location.search);
        return param.status || 'all';
    });

    useEffect(()=> {
        const params = queryString.parse(location.search);
        setFilteredStus(params.status || "all")
    }, [location.search])

    const handleTodoClick =(todo,idx) => {
        console.log(todo, idx)

        // clone arr  to the new one
        const newTodoList = [...todoList];
        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        // setFilteredStus('all');
        const queryParams = { status: 'all'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowCompletedClick = () => {
        // setFilteredStus('completed');
        const queryParams = { status: 'completed'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }
    const handleShowNewClick = () => {
        // setFilteredStus('new');
        const queryParams = { status: 'new'}
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams),
        })
    }

    const renderTodoList = useMemo(() => {
        return todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)
    }, [todoList, filteredStatus])
    
    const handleTodoFormSubmit = (values) => {
        console.log('Tao la moi:', values)
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: "new",
        };
        setTodoList([...todoList,newTodo])
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit}/>


            <h3>Todolist</h3>
            <TodoList todoList={renderTodoList} onTodoClick ={handleTodoClick}/>

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}
export default ListPage;