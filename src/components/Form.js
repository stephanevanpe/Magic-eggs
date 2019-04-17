import React from 'react';
import {InputGroup,InputGroupAddon,Button, Input} from 'reactstrap';

const Form = props =>(
    <form onSubmit={props.getSearchNameProp}>
    <InputGroup  style={{paddingTop:'.5em',justifyContent: 'center',paddingRight:'20%',paddingLeft:'20%',}}>
          <Input type="text" name="searchname" placeholder="Search for any Recipe. Go on Try me!" />
         <InputGroupAddon addonType="append">
          <Button color="primary">Search</Button>
          </InputGroupAddon>
    </InputGroup>
    </form>
);

export default Form;