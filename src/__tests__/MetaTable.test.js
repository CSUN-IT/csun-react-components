import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import {
  MetaTable,
  MetaTableHead,
  MetaTableRow,
  MetaTableCell,
  MetaTableHeaderCell,
  MetaTableBody,
} from '../../src';

configure({ adapter: new Adapter() });

describe('MetaTable', () => {
  it('Should be defined', () => {
    expect(MetaTable).toBeDefined();
  });

  it('Renders component correctly', () => {
    const tree = shallow(
      <MetaTable>
        <MetaTableHead>
          <MetaTableRow>
            <MetaTableHeaderCell>Hello</MetaTableHeaderCell>
            <MetaTableHeaderCell>World</MetaTableHeaderCell>
          </MetaTableRow>
        </MetaTableHead>
        <MetaTableBody>
          <MetaTableRow>
            <MetaTableCell>Foo</MetaTableCell>
            <MetaTableCell>Bar</MetaTableCell>
          </MetaTableRow>
        </MetaTableBody>
      </MetaTable>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Should mount and check table row contains two children', () => {
    const tree = mount(
      <MetaTable>
        <MetaTableHead>
          <MetaTableRow>
            <MetaTableHeaderCell>Hello</MetaTableHeaderCell>
            <MetaTableHeaderCell>World</MetaTableHeaderCell>
          </MetaTableRow>
        </MetaTableHead>
        <MetaTableBody>
          <MetaTableRow>
            <MetaTableCell>Foo</MetaTableCell>
            <MetaTableCell>Bar</MetaTableCell>
          </MetaTableRow>
        </MetaTableBody>
      </MetaTable>,
    );
    expect(tree.find('MetaTableRow').children()).toHaveLength(2);
  });
});
