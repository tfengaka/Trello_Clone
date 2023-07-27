import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import ButtonMenu from '~/components/ButtonMenu';
function BoardFilter() {
  return (
    <ButtonMenu
      startIcon={<FilterListRoundedIcon fontSize="small" />}
      sx={{
        px: 1.5,
      }}
      title="Filter"
      subheaderTitle="Filter"
    >
      Filter
    </ButtonMenu>
  );
}

export default BoardFilter;
