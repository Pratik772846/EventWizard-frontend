import React, { useEffect, useState } from 'react';
import Invite from './Invite';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Refresh from '../../../../hooks/useRefreshtoken.jsx';
import { toast } from 'react-toastify';

const Body = () => {
  const [invitations, setInvitations] = useState([]);
  const [isActionTaken, setIsActionTaken] = useState(false);

  const fetchData = async () => {
    const userId = sessionStorage.getItem('id');

    const accessToken = await Refresh();

    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      const response = await axios.get(
        `https://eventwizard-backend.onrender.com/user/${userId}`,
        config
      );

      const { invitations } = response.data.user;

      setInvitations(invitations);
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAcceptAll = async () => {
    const userId = sessionStorage.getItem('id');
    const accessToken = await Refresh();
    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      await axios.post(
        'https://eventwizard-backend.onrender.com/invites/acceptAll',
        { userId },
        config
      );

      toast.success('All invitations accepted successfully');
      setIsActionTaken(true);
    } catch (error) {
      console.error('Error accepting all invitations:', error);
      toast.error('Failed to accept all invitations');
    }
  };

  const handleRejectAll = async () => {
    const userId = sessionStorage.getItem('id');
    const accessToken = await Refresh();
    const config = {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    };

    try {
      await axios.post(
        'https://eventwizard-backend.onrender.com/invites/rejectAll',
        { userId },
        config
      );

      toast.success('All invitations rejected successfully');
      setIsActionTaken(true);
    } catch (error) {
      console.error('Error rejecting all invitations:', error);
      toast.error('Failed to reject all invitations');
    }
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center gap-10 py-20 mx-20 bg-white">
      <h1 className="mb-8 text-4xl font-bold">Your Invitations</h1>

      {invitations.length > 0 && !isActionTaken ? (
        invitations.map((invitation) => (
          <Invite
            key={invitation._id}
            eventId={invitation.eventId}
            name={invitation.name}
            venue={invitation.venue}
          />
        ))
      ) : (
        <p className="text-lg">No invitations found....</p>
      )}

      <Link
        to="/home"
        className="px-6 py-3 m-4 text-xl text-center duration-200 rounded md:w-1/4 hover:scale-105 bg-gradient-to-r from-color1 to-color2 sm:w-full"
      >
        Back to home
      </Link>

      {invitations.length > 0 && !isActionTaken && (
        <div className="flex flex-col mt-4 md:flex-row">
          <button
            className="px-4 py-2 mb-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 md:mb-0 md:mr-3"
            onClick={handleAcceptAll}
          >
            Accept All
          </button>
          <button
            className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
            onClick={handleRejectAll}
          >
            Reject All
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
