const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      boxShadow: '0px 0px 2px black'
    },
    newNoteBtn: {
      width: '100%',
      height: '35px',
      borderBottom: '1px solid black',
      borderRadius: '0px',
      backgroundColor: '#29487d',
      color: 'white',
      '&:hover': {
        backgroundColor: '#88a2ce'
      }
    },
    cardviewContainer: {
      marginTop: '0px',
      width: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'auto',
      overflowX: 'hidden',

      '& ul': {
        display: 'grid',
        'grid-gap': '20px',
        'grid-template-columns': '1fr 1fr 1fr',
      }
    },
    newNoteInput: {
      width: '100%',
      margin: '0px',
      height: '35px',
      outline: 'none',
      border: 'none',
      paddingLeft: '5px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }
    },
    newNoteSubmitBtn: {
      width: '100%',
      backgroundColor: '#28787c',
      borderRadius: '0px',
      color: 'white'
    }
  });
  
  export default styles;  