import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'
import { useNavigation } from 'react-router-dom'
import { Search } from '@mui/icons-material'
const SearchBar = () => {
    return (
        <div>

            <Paper component="form" onSubmit={() => { }} sx={{ boarderRadius: 20, border: '1px solid #e3e3e3', pl: 2, boxShadow: 'name', mr: { sm: 5 } }}>
                <input type="text" className='search-bar' placeholder='search...' onChange={() => { }} />
                <IconButton type="submit" sx={{ p: '10px', color: 'red' }} >
                    <Search />
                </IconButton>
            </Paper>
        </div >
    )
}

export default SearchBar