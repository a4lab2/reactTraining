import { Stack } from '@mui/material'
import { logo } from '../utils/constants'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <div>

            <Stack direction="row" spacing={2} p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alighnItems: 'center' }}>

                    <img src={logo} height={45} alt="" />
                </Link>

                <SearchBar />
            </Stack>
        </div>
    )
}

export default Navbar