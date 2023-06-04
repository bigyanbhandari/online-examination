import { Text } from './../components/atomic/Text'
import { GroupTagStyled } from './Styles';

const TableTitle = ({ title = '', count = '', subTitle = '' }) => {
  return (
    <div className='flex flex-col gap-1 '>
      <div className='flex flex-row gap-2 items-center'>
        <Text type='display' size='xs' weight='bold'>
          {title}
        </Text>
        <GroupTagStyled>{count}</GroupTagStyled>
      </div>
      <div>
        <Text size='sm' weight='regular' className='text-[#475467]'>
          {subTitle}
        </Text>
      </div>
    </div>
  );
};

export default TableTitle;
