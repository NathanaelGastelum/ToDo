const styles = theme => ({
    listItem: {
      cursor: 'pointer',
      maxWidth: '85%',
    },
    textSection: {
      //TODO: Move this functionality to cardview
      maxWidth: '85%',
    },  
    deleteIcon: {
      right: '5px',
      top: 'calc(50% - 15px)',
      '&:hover': {
        color: 'red'
      }
    }
  });
  
  export default styles;  