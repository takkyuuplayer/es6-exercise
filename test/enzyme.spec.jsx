import React from 'react';
import assert from 'power-assert';
import { shallow } from 'enzyme';

const Foo = () => (
  <div className="foo" />
);
const Bar = () => (
  <div>
    <Foo />
    <Foo />
  </div>
);


describe('Foo', () => {
  it('contains div.foo', () => {
    const wrapper = shallow(<Foo />);
    assert.equal(wrapper.find('div.foo').length, 1);
  });
});

describe('Bar', () => {
  it('contains 2 Foo', () => {
    const wrapper = shallow(<Bar />);
    assert.equal(wrapper.find(Foo).length, 2);
  });
});
