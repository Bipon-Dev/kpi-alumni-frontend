import { useState, useEffect } from "react";

// hooks
import { useRedux } from "../hooks/index";

// api
import { getLoggedinUser } from "../api/apiCore";
import { createSelector } from "reselect";
//utils
import { divideByKey } from "../utils";

const useProfile = () => {
  // global store
  const { useAppSelector } = useRedux();

  // const { settings } = useAppSelector(state => ({
  //   settings: state.Settings.settings,
  // }));

  const errorData = createSelector(
    (state : any) => state.Settings,
    (state) => ({
      settings: state.settings,
    })
  );
  // Inside your component
  const { settings} = useAppSelector(errorData);




  const image = settings.basicDetails && settings.basicDetails.profile;
  const userProfileSession = getLoggedinUser();
  const [loading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(
    userProfileSession ? { ...userProfileSession, profileImage: image } : null
  );
  useEffect(() => {
    const userProfileSession = getLoggedinUser();
    setUserProfile(
      userProfileSession ? { ...userProfileSession, profileImage: image } : null
    );
  }, [image]);

  return { userProfile, loading };
};

const useContacts = () => {
  // global store
  const { useAppSelector } = useRedux();

  // const { contactsList } = useAppSelector(state => ({
  //   contactsList: state.Contacts.contacts,
  // }));



  const errorData = createSelector(
    (state : any) => state.Contacts,
    (state) => ({
      contactsList: state.contacts,
    })
  );
  // Inside your component
  const { contactsList} = useAppSelector(errorData);

  const [contacts, setContacts] = useState<Array<any>>([]);
  const [categorizedContacts, setCategorizedContacts] = useState<Array<any>>(
    []
  );
  useEffect(() => {
    if (contactsList.length > 0) {
      setContacts(contactsList);
    }
  }, [contactsList]);

  useEffect(() => {
    if (contacts.length > 0) {
      const formattedContacts = divideByKey("firstName", contacts);
      setCategorizedContacts(formattedContacts);
    }
  }, [contacts]);

  const totalContacts = (categorizedContacts || []).length;
  return { categorizedContacts, totalContacts };
};

const useConversationUserType = () => {
  // global store
  const { useAppSelector } = useRedux();

  // const { chatUserDetails } = useAppSelector(state => ({
  //   chatUserDetails: state.Chats.chatUserDetails,
  // }));

  const errorData = createSelector(
    (state : any) => state.Chats,
    (state) => ({
      chatUserDetails: state.chatUserDetails,
    })
  );
  // Inside your component
  const { chatUserDetails} = useAppSelector(errorData);

  const [isChannel, setIsChannel] = useState<boolean>(false);
  useEffect(() => {
    setIsChannel(chatUserDetails.isChannel ? true : false);
  }, [chatUserDetails]);

  return { isChannel };
};
export { useProfile, useContacts, useConversationUserType };
