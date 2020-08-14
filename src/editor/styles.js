const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    titleInput: {
      height: '50px',
      boxSizing: 'border-box',
      border: 'none',
      padding: '5px',
      fontSize: '24px',
      width: 'calc(100% - 325px)',
      backgroundColor: '#29487d',
      color: 'white',
      paddingLeft: '10px'
    },
    editIcon: {
      left: '310px',
      top: '12px',
      backgroundColor: '#29487d',
      color: 'white',
      width: '25px',
      height: '50px',
      'vertical-align': 'top'
    },
    editorContainer: {
      height: '100%',
      boxSizing: 'border-box'
    }
  });
  
  export default styles;