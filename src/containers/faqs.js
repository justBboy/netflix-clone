import React from 'react'
import faqsData from '../fixtures/faqs.json';
import {Accordion} from '../components';
import OptForm from '../components/opt-form';


const FaqsContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
        <OptForm>
                <OptForm.Input placeholder="Email Address" />
                <OptForm.Button>Try it Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>Ready to Watch? Enter Your Email to create or restart your membership</OptForm.Text>
        </OptForm>
        </Accordion>
    )
}

export default FaqsContainer
