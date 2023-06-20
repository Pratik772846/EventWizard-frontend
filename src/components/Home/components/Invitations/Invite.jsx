import React, { useState } from 'react';
import axios from 'axios';
import Refresh from '../../../../hooks/useRefreshtoken.jsx';
import { toast } from 'react-toastify';

const Invite = ({ name, venue, eventId }) => {
  const [isActionTaken, setIsActionTaken] = useState(false);

  const acceptInvite = async () => {
    const userId = sessionStorage.getItem('id');
    const accessToken = await Refresh();
    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.post(
        'https://eventwizard-backend.onrender.com/invites/accept',
        {
          userId,
          eventId,
        },
        config
      );

      console.log(response.data);
      toast.success('Invite accepted successfully');
      setIsActionTaken(true); // Set the state to trigger rerender
    } catch (error) {
      console.error('Error accepting invite:', error);
      toast.error('Failed to accept invite');
    }
  };

  const rejectInvite = async () => {
    const userId = sessionStorage.getItem('id');
    const accessToken = await Refresh();
    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.post(
        'https://eventwizard-backend.onrender.com/invites/reject',
        {
          userId,
          eventId,
        },
        config
      );

      console.log(response.data);
      toast.success('Invite rejected successfully');
      setIsActionTaken(true); // Set the state to trigger rerender
    } catch (error) {
      console.error('Error rejecting invite:', error);
      toast.error('Failed to reject invite');
    }
  };

  if (isActionTaken) {
    // Return null to hide the invite after an action is taken
    return null;
  }

  return (
    <div className="flex flex-col items-center w-full px-4 py-2 mb-2 text-white bg-gray-700 rounded-lg md:flex-row md:justify-evenly ">
      <span className="text-white">{name}</span>
      <span className="text-white">{venue}</span>
      <button
        className="px-4 py-2 my-2 text-white bg-green-500 rounded-lg hover:bg-green-600"
        onClick={acceptInvite}
      >
        Accept
      </button>
      <button
        className="px-4 py-2 my-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
        onClick={rejectInvite}
      >
        Reject
      </button>
    </div>
  );
};

export default Invite;
