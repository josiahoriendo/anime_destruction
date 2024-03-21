'use client'

import { Sidebar } from '@rewind-ui/core';
import Dropdowns from './Dropdowns.jsx';
import './Sidebar.css'; // Import CSS file for styling


export default function MapSidebar() {
  return (
    <div className="w-fit h-fit min-h-[43rem]">
      <Sidebar className="absolute" color='zinc'>
        <Sidebar.Head>
          <Sidebar.Head.Title className='py-3.5'>Destruction Visualizer</Sidebar.Head.Title>
          <Sidebar.Head.Toggle />
        </Sidebar.Head>

        <Sidebar.Nav>
          <Sidebar.Nav.Section>
            <Sidebar.Nav.Section.Title>Visualizer</Sidebar.Nav.Section.Title>
            <div className="flex flex-col justify-center items-center">
              <Dropdowns></Dropdowns>
              <button id='destructionButton' className='mt-3'>Destory</button>
            </div>
            <Sidebar.Nav.Section.Item label="Options" as="button" className='pt-5'>
              <Sidebar.Nav.Section isChild>
                <Sidebar.Nav.Section.Item
                  label="Death Count (To be implemented)"
                  />
              </Sidebar.Nav.Section>
            </Sidebar.Nav.Section.Item>
          </Sidebar.Nav.Section>

          <Sidebar.Nav.Section>
            <Sidebar.Separator />
            <Sidebar.Nav.Section.Title>Other</Sidebar.Nav.Section.Title>
            <Sidebar.Nav.Section.Item label="About" href="/about" />
            <Sidebar.Nav.Section.Item label="FAQ" href="#" />
          </Sidebar.Nav.Section>
        </Sidebar.Nav>

        <Sidebar.Footer>
          <div className="flex flex-col justify-center items-center text-sm">
            <span className="font-semibold">Number of Visits:</span>
            <span>version x.y.z</span>
          </div>
        </Sidebar.Footer>
      </Sidebar>
    </div>
  );
}