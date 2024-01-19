import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/sliceFilter';
import { filterSelector } from 'store/selectors';

import Input from './Input';
import { InputContainer } from 'components/styled/style';

const Filter = ({ title }) => {

  const filter = useSelector(filterSelector)

    const dispatch = useDispatch()

    const filterContacts = ({target: {value}}) => {
    dispatch(setFilter(value))
  }

    return (
        <InputContainer>
            <Input
                htmlFor={'filterName'}
                label={title}
                type={'text'}
                name={'filter'}
                id={'filterName'}
                placeholder={"Search by name..."}
                value={filter}
                onChange={filterContacts}
            />
        </InputContainer>     
  )
}

export default Filter;