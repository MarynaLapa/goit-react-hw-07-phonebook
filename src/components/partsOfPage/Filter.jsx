import { InputContainer } from 'components/styled/style';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/sliceFilter';
import Input from './Input';

const Filter = ({ title }) => {

    const { filter } = useSelector((state) => state.filter)
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